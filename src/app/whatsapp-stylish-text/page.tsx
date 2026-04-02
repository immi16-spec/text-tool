import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { tools } from '@/lib/tools';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

const mainTool = tools.find(t => t.path.endsWith('/fancy-text-generator'))!;

export const metadata: Metadata = {
  title: 'WhatsApp Stylish Text & Cool Fonts Generator',
  description: 'Generate stylish text and cool fonts for your WhatsApp messages, status, and profile name. Copy and paste fancy text to impress your friends.',
  keywords: ['whatsapp fonts', 'whatsapp stylish text', 'cool whatsapp fonts', 'fancy text for whatsapp', 'font generator'],
  alternates: {
    canonical: '/whatsapp-stylish-text',
  },
};

export default function WhatsAppStylishTextPage() {
  const exampleStyles = [
    "🆂🆃🅰️🆈🅻🅸🆂🅷 🆃🅴🆇🆃",
    "Sƚყʅιʂԋ Tҽxƚ",
    "S𝚝𝚢𝚕𝚒𝚜𝚑 T𝚎𝚡𝚝",
    "【S】【t】【y】【l】【i】【s】【h】 【T】【e】【x】【t】"
  ];

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="text-center">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          WhatsApp Stylish Text Generator
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Make your WhatsApp chats, status, and profile name more interesting with unique fonts.
        </p>
      </header>

      <div className="my-12 text-center">
        <Button asChild size="lg" className="h-12 px-8 text-lg">
          <Link href={mainTool.path}>
            Generate Stylish Text Now <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>

      <section className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>How to Use Fancy Text in WhatsApp</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              While WhatsApp has built-in formatting options like bold, italic, and strikethrough, our tool takes it to the next level. You can use dozens of unique Unicode fonts to make your messages truly stand out.
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Navigate to the <Link href={mainTool.path} className="font-semibold text-primary hover:underline">Fancy Text Generator</Link>.</li>
              <li>Enter the message or name you want to stylize.</li>
              <li>Browse the list of generated fonts and find one you like.</li>
              <li>Click the "Copy" button.</li>
              <li>Open WhatsApp and paste the text into a chat, your status, or your profile name.</li>
            </ol>
            <p className="!mt-6">It's that simple! The text will appear in the fancy style you chose, visible to everyone in the chat.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Examples for WhatsApp</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {exampleStyles.map((style, i) => (
              <p key={i} className="text-lg p-2 bg-muted rounded-md font-mono">{style}</p>
            ))}
          </CardContent>
        </Card>
      </section>
      
       <div className="mt-12 text-center">
        <p className="text-lg text-muted-foreground">Ready to spice up your chats?</p>
        <Button asChild size="lg" className="mt-4 h-12 px-8 text-lg">
          <Link href={mainTool.path}>
            Try the Font Generator Now <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
