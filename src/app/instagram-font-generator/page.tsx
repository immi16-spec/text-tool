import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { tools } from '@/lib/tools';
import { ArrowRight, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

const mainTool = tools.find(t => t.path.endsWith('/fancy-text-generator'))!;

export const metadata: Metadata = {
  title: 'Instagram Font Generator - Stylish Fonts for Your Bio',
  description: 'Generate cool, stylish, and fancy fonts for your Instagram bio, captions, and comments. Copy and paste unique text styles to make your profile stand out.',
  keywords: ['instagram fonts', 'instagram bio fonts', 'fancy text for instagram', 'stylish fonts', 'cool fonts', 'font generator'],
  alternates: {
    canonical: '/instagram-font-generator',
  },
};

export default function InstagramFontGeneratorPage() {
  const exampleStyles = [
    "ℐ𝓃𝓈𝓉𝒶𝑔𝓇𝒶𝓂 𝐹𝑜𝓃𝓉𝓈",
    "𝕴𝖓𝖘𝖙𝖆𝖌𝖗𝖆𝖒 𝕱𝖔𝖓𝖙𝖘",
    "𝗜𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺 𝗙𝗼𝗻𝘁𝘀",
    "𝘐𝘯𝘴𝘵𝘢𝘨𝘳𝘢𝘮 𝘍𝘰𝘯𝘵𝘴",
    "ɪɴsᴛᴀɢʀᴀᴍ ғᴏɴᴛs",
    "ⓘⓝⓢⓣⓐⓖⓡⓐⓜ ⓕⓞⓝⓣⓢ"
  ];

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="text-center">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          Instagram Font Generator
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Create eye-catching text for your Instagram bio, captions, and stories.
        </p>
      </header>

      <div className="my-12 text-center">
        <Button asChild size="lg" className="h-12 px-8 text-lg">
          <Link href={mainTool.path}>
            Go to the Fancy Text Generator <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>

      <section className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Why Use Fancy Fonts on Instagram?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Instagram has a default font, which makes most profiles look similar. By using custom fonts, you can make your profile, posts, and stories instantly more engaging and memorable. It's a simple way to express your personality or brand identity and grab your followers' attention.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" /> <span><strong>Stand Out:</strong> Differentiate your profile from millions of others.</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" /> <span><strong>Boost Engagement:</strong> Unique fonts can make users stop scrolling and pay attention to your content.</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" /> <span><strong>Brand Identity:</strong> Reinforce your brand's aesthetic with a consistent and stylish look.</span></li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Examples of Stylish Fonts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {exampleStyles.map((style, i) => (
              <p key={i} className="text-lg p-2 bg-muted rounded-md font-mono">{style}</p>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How It Works</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>Our tool uses a special set of characters called Unicode. These are not actually fonts, but rather symbols that look like letters. Because they are characters, you can copy and paste them into almost any text field, including your Instagram bio, and they will appear correctly on most devices.</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Go to our <Link href={mainTool.path} className="font-semibold text-primary hover:underline">Fancy Text Generator</Link>.</li>
              <li>Type your desired text into the input box.</li>
              <li>Scroll through the dozens of generated styles.</li>
              <li>Click the "Copy" button next to your favorite style.</li>
              <li>Paste it directly into your Instagram bio, caption, or comment.</li>
            </ol>
          </CardContent>
        </Card>
      </section>

      <div className="mt-12 text-center">
        <p className="text-lg text-muted-foreground">Ready to make your profile shine?</p>
        <Button asChild size="lg" className="mt-4 h-12 px-8 text-lg">
          <Link href={mainTool.path}>
            Try the Font Generator Now <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
