import { tools } from '@/lib/tools';
import Link from 'next/link';
import { Logo } from '../Logo';
import { AdSlot } from '../ads/AdSlot';

const footerToolPaths = [
  '/tools/fancy-text-generator',
  '/tools/word-counter',
  '/tools/space-remover',
  '/tools/case-converter',
  '/tools/grammar-checker-translate',
];

export function Footer() {
  const footerLinks = footerToolPaths
    .map((path) => tools.find((tool) => tool.path === path))
    .filter((tool): tool is (typeof tools)[number] => Boolean(tool));
  const trafficPages = [
    { name: 'Instagram Font Generator', path: '/instagram-font-generator' },
    { name: 'WhatsApp Stylish Text', path: '/whatsapp-stylish-text' },
    { name: 'YouTube Title Tools', path: '/youtube-title-tools' },
  ];
  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <footer className="border-t">
      <div className="container mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <AdSlot className="bottom-ad" />
      </div>
      <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Your one-stop destination for modern, fast, and free text utilities.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Core Tools</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.map(tool => (
                <li key={tool.path}>
                  <Link href={tool.path} className="text-sm text-muted-foreground hover:text-primary">
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Popular Uses</h3>
            <ul className="mt-4 space-y-2">
               {trafficPages.map(page => (
                <li key={page.path}>
                  <Link href={page.path} className="text-sm text-muted-foreground hover:text-primary">
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Company</h3>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="text-sm text-muted-foreground hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} TextToolPro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
