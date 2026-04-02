import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Read the TextToolPro privacy policy covering data collection, cookies, analytics, advertising, and how visitor information is used on the site.',
  alternates: {
    canonical: '/privacy',
  },
};

const sections = [
  {
    title: 'Information We Collect',
    body:
      'TextToolPro is designed to work with minimal data collection. We may collect limited technical information such as browser type, device details, approximate location, referral source, and pages visited to understand traffic patterns and improve site performance. If you contact us directly, we may also receive the name, email address, and message details you choose to share.',
  },
  {
    title: 'How We Use Data',
    body:
      'We use collected information to operate the website, improve performance, understand which tools are most useful, respond to support requests, prevent abuse, and maintain site security. We do not require account registration to access our core tools, and we aim to keep data usage proportional to delivering a reliable service.',
  },
  {
    title: 'Cookies and Similar Technologies',
    body:
      'TextToolPro may use cookies and similar technologies to remember preferences, measure traffic, and support site functionality. Cookies can also help us understand how visitors move through the website so we can improve navigation, content, and performance over time.',
  },
  {
    title: 'Third-Party Advertising',
    body:
      'We may display third-party advertisements, including Google AdSense, on some pages of the site. Advertising partners may use cookies to serve ads based on your visit to this and other websites. Google may use advertising cookies to personalize ads where permitted by law and policy. Visitors can learn more about how Google uses information from partner sites and apps through Google’s own privacy and advertising documentation.',
  },
  {
    title: 'User Content and Tool Inputs',
    body:
      'Some tools process text that you type or paste into the website. That content is used to provide the requested tool functionality. We recommend that you avoid entering sensitive personal, financial, or confidential information into online tools unless you are comfortable doing so. We work to keep the experience secure, but no internet-based service can promise absolute security.',
  },
  {
    title: 'Your Choices',
    body:
      'You can control or disable cookies through your browser settings. You may also choose not to use parts of the site that rely on optional cookies or third-party services. If you contact us and want your inquiry information removed, you can reach out again using the contact details below.',
  },
];

export default function PrivacyPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="max-w-3xl space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
        <p className="text-lg text-muted-foreground">
          This Privacy Policy explains how TextToolPro collects, uses, and protects information
          when you browse the website or use our free online tools.
        </p>
      </header>

      <div className="mt-10 space-y-6">
        {sections.map((section) => (
          <section key={section.title} className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold">{section.title}</h2>
            <p className="mt-4 leading-7 text-muted-foreground">{section.body}</p>
          </section>
        ))}
      </div>

      <section className="mt-6 rounded-2xl border bg-muted/40 p-6">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-4 leading-7 text-muted-foreground">
          If you have questions about this Privacy Policy or how information is handled on
          TextToolPro, contact us at{' '}
          <a href="mailto:contact.findsandflips@gmail.com" className="font-medium text-primary hover:underline">
            contact.findsandflips@gmail.com
          </a>
          .
        </p>
      </section>
    </div>
  );
}
