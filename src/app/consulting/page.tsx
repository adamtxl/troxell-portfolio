import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technology Consulting — Adam Troxell',
  description:
    'Technology strategy for real estate and commercial property businesses.',
}

export default function ConsultingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-16">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold mb-4">
          Consulting
        </p>
        <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl text-balance">
          Technology strategy for{' '}
          <span className="text-brand-gold italic">
            real estate and commercial property
          </span>{' '}
          businesses.
        </h1>
        <p className="mt-6 text-lg text-brand-muted">
          Sometimes you need more than a website. If you&apos;re evaluating
          software, trying to make sense of your tech stack, or navigating an
          integration — that&apos;s a different conversation.
        </p>
        <p className="mt-4 text-brand-muted">
          I take a small number of advisory conversations each quarter. If
          it&apos;s a strong fit, I&apos;ll tell you quickly.
        </p>
        <a
          href="mailto:adam@troxellendeavors.com?subject=Consulting%20Inquiry"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand-gold px-6 py-2.5 text-sm font-medium text-brand-gold hover:bg-brand-gold hover:text-brand-navy transition-all"
        >
          Get in touch
        </a>
      </div>
    </div>
  )
}
