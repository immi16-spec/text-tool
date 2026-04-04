'use client';

import { FormEvent, useState } from 'react';
import { FORMSPREE_CONTACT_ENDPOINT } from '@/lib/constants';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch(FORMSPREE_CONTACT_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Unable to send your message right now.');
      }

      form.reset();
      setIsSubmitted(true);
    } catch {
      setErrorMessage('We could not send your message right now. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <h2 className="text-2xl font-semibold">Send a Message</h2>
      {isSubmitted ? (
        <div className="mt-6 rounded-md border border-primary/20 bg-primary/5 px-4 py-5 text-sm text-foreground">
          Message Sent Successfully! We will contact you at
          {' '}
          <a
            href="mailto:contact.findsandflips@gmail.com"
            className="font-medium text-primary hover:underline"
          >
            contact.findsandflips@gmail.com
          </a>
          {' '}
          soon.
        </div>
      ) : (
        <form
          action={FORMSPREE_CONTACT_ENDPOINT}
          method="POST"
          onSubmit={handleSubmit}
          className="mt-6 space-y-4"
        >
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
              required
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
              required
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
              required
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? 'Sending...' : 'Send Inquiry'}
          </button>
          {errorMessage ? <p className="text-sm text-destructive">{errorMessage}</p> : null}
          <p className="text-sm text-muted-foreground">
            You can also email us directly at
            {' '}
            <a
              href="mailto:contact.findsandflips@gmail.com"
              className="font-medium text-primary hover:underline"
            >
              contact.findsandflips@gmail.com
            </a>
            .
          </p>
        </form>
      )}
    </>
  );
}
