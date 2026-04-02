import type { Metadata } from 'next';

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
          <h2 className="text-2xl font-semibold">Send a Message</h2>
          <form className="mt-6 space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="contact@yourdomain.com"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="Tell us how we can help."
              />
            </div>
            <button
              type="submit"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
            >
              Send Inquiry
            </button>
            <p className="text-sm text-muted-foreground">
              This contact form is a placeholder for your preferred submission workflow. You can
              also email us directly at{' '}
              <a href="mailto:contact.findsandflips@gmail.com" className="font-medium text-primary hover:underline">
                contact.findsandflips@gmail.com
              </a>
              .
            </p>
          </form>
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
