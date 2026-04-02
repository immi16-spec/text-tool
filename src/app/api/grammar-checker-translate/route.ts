import {NextRequest, NextResponse} from 'next/server';
import {ZodError} from 'zod';

import {
  grammarAndTranslateText,
  GrammarAndTranslateTextInputSchema,
} from '@/ai/flows/grammar-and-translate-text';
import {
  checkGrammarTranslateRateLimit,
  getCachedGrammarTranslateResult,
  setCachedGrammarTranslateResult,
} from '@/lib/server/grammar-translate-store';

export const runtime = 'nodejs';

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0]?.trim() || 'anonymous';
  }

  return request.headers.get('x-real-ip')?.trim() || 'anonymous';
}

function errorResponse(message: string, status: number) {
  return NextResponse.json(
    {
      success: false,
      error: message,
    },
    {status}
  );
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    const rateLimit = checkGrammarTranslateRateLimit(ip);

    if (!rateLimit.allowed) {
      return errorResponse(rateLimit.message, rateLimit.status);
    }

    const body = await request.json();
    const input = GrammarAndTranslateTextInputSchema.parse(body);
    const cachedResult = getCachedGrammarTranslateResult(input);

    if (cachedResult) {
      return NextResponse.json({
        success: true,
        result: cachedResult,
      });
    }

    const result = await grammarAndTranslateText(input);
    setCachedGrammarTranslateResult(input, result);

    return NextResponse.json({
      success: true,
      result,
    });
  } catch (error) {
    if (error instanceof ZodError) {
      const firstMessage = error.issues[0]?.message || 'Invalid input.';
      return errorResponse(firstMessage, 400);
    }

    if (error instanceof SyntaxError) {
      return errorResponse('Invalid request body.', 400);
    }

    console.error('Grammar checker API failed', error);
    return errorResponse('Unable to process text right now. Please try again.', 500);
  }
}
