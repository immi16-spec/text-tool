import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { TrustSignals } from '@/components/layout/TrustSignals';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://texttoolpro.vercel.app'),
  title: {
    default: 'TextToolPro - Free & Modern Text Tools',
    template: '%s | TextToolPro',
  },
  description: 'A complete suite of free, fast, and modern text utilities. Includes a fancy text generator, word counter, case converter, and more. No signup required, instant results.',
  keywords: 'text tools, fancy text, word counter, case converter, slug generator, online tools',
  verification: {
    google: 'nNPXvPKqHTqMwrp-eSqrpEXjshp5xKsz2CIcKm69CUI',
  },
  openGraph: {
    title: 'TextToolPro - Free & Modern Text Tools',
    description: 'The ultimate collection of online text manipulation tools.',
    type: 'website',
    url: 'https://texttoolpro.vercel.app', // Replace with your actual domain
    siteName: 'TextToolPro',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export const viewport: Viewport = {
  themeColor: '#6C26E0',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "w66ahr79vj");`}
        </Script>
      </head>
      <body className={cn('min-h-screen bg-background font-sans antialiased', inter.variable)}>
        <div className="relative flex min-h-dvh flex-col bg-background">
          <Header />
          <TrustSignals />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
