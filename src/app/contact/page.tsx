import type { Metadata } from 'next';
import { ContactForm } from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact TextToolPro',
  description:
    'Contact TextToolPro for support, feedback, partnerships, or tool suggestions through our email details and simple contact form.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="max-w-3xl space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">Contact Us</h1>
        <p className="text-lg text-muted-foreground">
          Questions, feedback, partnership ideas, or tool suggestions are always welcome. Use the
          form below or email us directly and we will review your message as soon as possible.
        </p>
      </header>

      <div className="mt-10 grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-2xl border bg-card p-6 shadow-sm">
          <ContactForm />
        </section>

        <aside className="rounded-2xl border bg-muted/40 p-6">
          <h2 className="text-2xl font-semibold">Direct Contact</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Email is the best way to reach the TextToolPro team for support, advertising
            questions, privacy requests, or tool recommendations.
          </p>
          <p className="mt-4 text-base font-medium">
            <a href="mailto:contact.findsandflips@gmail.com" className="text-primary hover:underline">
              contact.findsandflips@gmail.com
            </a>
          </p>
          <p className="mt-6 text-sm leading-6 text-muted-foreground">
            We aim to keep communication clear and helpful, just like the tools on the site.
          </p>
        </aside>
      </div>
    </div>
  );
}
