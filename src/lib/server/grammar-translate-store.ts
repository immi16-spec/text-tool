import type {GrammarAndTranslateTextInput, GrammarAndTranslateTextOutput} from '@/ai/flows/grammar-and-translate-text';

type RateLimitEntry = {
  count: number;
  dayKey: string;
  lastRequestAt: number;
};

type CacheEntry = {
  result: GrammarAndTranslateTextOutput;
  createdAt: number;
};

const DAILY_LIMIT = 10;
const COOLDOWN_MS = 15_000;
const CACHE_TTL_MS = 1000 * 60 * 60 * 24;
const MAX_CACHE_ENTRIES = 100;

const globalStore = globalThis as typeof globalThis & {
  __grammarTranslateRateLimitStore?: Map<string, RateLimitEntry>;
  __grammarTranslateCacheStore?: Map<string, CacheEntry>;
};

const rateLimitStore =
  globalStore.__grammarTranslateRateLimitStore ??
  (globalStore.__grammarTranslateRateLimitStore = new Map<string, RateLimitEntry>());

const cacheStore =
  globalStore.__grammarTranslateCacheStore ??
  (globalStore.__grammarTranslateCacheStore = new Map<string, CacheEntry>());

function getDayKey(date = new Date()) {
  return date.toISOString().slice(0, 10);
}

function getCacheKey(input: GrammarAndTranslateTextInput) {
  return JSON.stringify({
    text: input.text.trim(),
    targetLanguage: input.targetLanguage?.trim() || '',
    tone: input.tone?.trim() || '',
  });
}

function pruneCache(now: number) {
  for (const [key, value] of cacheStore.entries()) {
    if (now - value.createdAt > CACHE_TTL_MS) {
      cacheStore.delete(key);
    }
  }

  while (cacheStore.size > MAX_CACHE_ENTRIES) {
    const oldestKey = cacheStore.keys().next().value;
    if (!oldestKey) {
      break;
    }
    cacheStore.delete(oldestKey);
  }
}

export function getCachedGrammarTranslateResult(
  input: GrammarAndTranslateTextInput
): GrammarAndTranslateTextOutput | null {
  const now = Date.now();
  pruneCache(now);

  const cachedEntry = cacheStore.get(getCacheKey(input));
  if (!cachedEntry) {
    return null;
  }

  return cachedEntry.result;
}

export function setCachedGrammarTranslateResult(
  input: GrammarAndTranslateTextInput,
  result: GrammarAndTranslateTextOutput
) {
  pruneCache(Date.now());
  cacheStore.set(getCacheKey(input), {
    result,
    createdAt: Date.now(),
  });
}

export function checkGrammarTranslateRateLimit(ip: string) {
  const now = Date.now();
  const dayKey = getDayKey();
  const entry = rateLimitStore.get(ip);

  if (!entry || entry.dayKey !== dayKey) {
    rateLimitStore.set(ip, {
      count: 0,
      dayKey,
      lastRequestAt: 0,
    });
  }

  const currentEntry = rateLimitStore.get(ip)!;

  if (now - currentEntry.lastRequestAt < COOLDOWN_MS) {
    return {
      allowed: false,
      status: 429,
      message: 'Please wait 15 seconds before trying again.',
    } as const;
  }

  if (currentEntry.count >= DAILY_LIMIT) {
    return {
      allowed: false,
      status: 429,
      message: 'Daily limit reached. Try again later.',
    } as const;
  }

  currentEntry.count += 1;
  currentEntry.lastRequestAt = now;
  rateLimitStore.set(ip, currentEntry);

  return {
    allowed: true,
    remaining: DAILY_LIMIT - currentEntry.count,
  } as const;
}
