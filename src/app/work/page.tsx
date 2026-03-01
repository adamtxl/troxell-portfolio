import type { Metadata } from 'next'
import { ExternalLink, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Web Development for Real Estate & Local Business',
  description:
    'Custom websites for commercial real estate firms and local businesses. Fixed price, you own everything, no monthly platform fees.',
}

const packages = [
  {
    name: 'Professional Foundation',
    price: '$5,200',
    tag: null,
    best: 'Best for brokers who need a polished presence launched quickly.',
    timeline: '3–4 weeks',
    includes: [
      'Home, about, listings showcase, lead capture, contact',
      'CMS — update listings yourself, no developer needed',
      'Mobile-responsive on all devices',
      'SEO basics, Google Analytics',
      'Up to 10 listings loaded at launch',
      '2 rounds of revisions',
    ],
  },
  {
    name: 'Lead Engine',
    price: '$7,800',
    tag: 'Most Popular',
    best: 'Best for firms that want inbound leads and SEO momentum.',
    timeline: '4–5 weeks',
    includes: [
      'Everything in Professional Foundation',
      'Individual listing detail pages',
      'Listings filtering by type, status, neighborhood',
      'Enhanced lead funnels (valuation, consultation, inquiry)',
      'Full SEO launch optimization + Google indexing',
      'Video embedding, blog/resources section',
      'Enhanced analytics and conversion tracking',
      '90-day SEO check-in call',
    ],
  },
  {
    name: 'Custom Build',
    price: '$12,000',
    tag: null,
    best: 'Best for teams that want a platform-like experience or advanced integrations.',
    timeline: '6–8 weeks',
    includes: [
      'Everything in Lead Engine',
      'Fully custom React/Next.js + headless CMS',
      'MLS integration exploration and scoping',
      'Priority support and faster turnaround',
      'Quarterly strategy calls for year one',
    ],
  },
]

const faqs = [
  {
    q: 'Do I have to pay a monthly fee after launch?',
    a: 'No platform fees. Your only ongoing cost is hosting — typically $15–50/month depending on your setup, paid directly to the host. Support is available at $150/hr, but you can also manage content yourself via the CMS.',
  },
  {
    q: 'What if I want to change things after launch?',
    a: 'Two revision rounds are included during the project. After launch, updates are $150/hr, or you can manage content yourself via the CMS.',
  },
  {
    q: 'How is this different from Wix or those $300/month real estate platforms?',
    a: "Those platforms rent you software — when you stop paying, your site goes dark. What I build is yours: no monthly platform fee, no vendor lock-in, full control. You can take it to any developer, host it anywhere, and it keeps running whether you pay me or not.",
  },
  {
    q: 'Do you work with businesses outside of real estate?',
    a: 'Yes. Commercial real estate is my specialty, but I work with local businesses that want a professional presence without the agency markup.',
  },
]

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pt-28 pb-24">

      {/* Hero */}
      <div className="mb-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold mb-4">
          Web Development
        </p>
        <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl text-balance">
          Professional websites for{' '}
          <span className="text-brand-gold italic">commercial real estate</span>{' '}
          and local businesses.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-brand-muted">
          You shouldn&apos;t have to explain what you do for a living to your web
          developer. I spent nine years in real estate technology — I understand
          your business, your clients, and what it actually takes to generate leads
          online. I build sites that convert, rank locally, and make it easy for
          clients to contact you.
        </p>
        <a
          href="mailto:adam@troxellendeavors.com?subject=Website%20Project%20Inquiry"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-gold px-6 py-2.5 text-sm font-semibold text-brand-navy hover:bg-brand-gold-light transition-colors"
        >
          Let&apos;s talk about your project →
        </a>
      </div>

      {/* Why Work With Me */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-bold text-white mb-8">Why Work With Me</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              title: 'I know your industry',
              body: 'Nine years at FBS Systems (Flexmls) supporting hundreds of real estate professionals. I don\'t need a crash course in how your business works.',
            },
            {
              title: 'You own what I build',
              body: 'No monthly platform fees. No vendor lock-in. Ongoing hosting typically runs $15–50/month depending on features — paid directly to the host.',
            },
            {
              title: 'Senior engineering, applied to marketing sites',
              body: "I've built production systems handling real-time data across commercial facilities. Professional execution, on schedule, with clear communication. No ghosting after deposit.",
            },
            {
              title: 'One point of contact',
              body: 'You talk to me. I build it. No handoffs to offshore teams or junior developers.',
            },
          ].map(({ title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-brand-slate/30 p-6"
            >
              <h3 className="font-semibold text-white mb-2">{title}</h3>
              <p className="text-sm text-brand-muted leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What I Build */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-bold text-white mb-8">What I Build</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-brand-slate/30 p-6">
            <h3 className="font-semibold text-brand-gold mb-4">Commercial Real Estate</h3>
            <ul className="space-y-2 text-sm text-brand-muted">
              {[
                'Broker and team marketing sites',
                'Listing showcase with CMS',
                'Lead capture: valuation requests, consultation booking',
                'Track record and deal history sections',
                '1031 Exchange info pages',
                'SEO foundations for local search',
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle size={14} className="text-brand-gold mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-brand-slate/30 p-6">
            <h3 className="font-semibold text-brand-gold mb-4">Local Business</h3>
            <ul className="space-y-2 text-sm text-brand-muted">
              {[
                'Professional presence and credibility',
                'Service pages and portfolio sections',
                'Contact and lead forms',
                'Google Analytics and conversion tracking',
                'Mobile-optimized for every device',
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle size={14} className="text-brand-gold mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-bold text-white mb-8">How It Works</h2>
        <div className="space-y-4">
          {[
            { step: '01', title: 'Discovery call (~30 min)', body: 'We talk about your goals, your clients, and what you need the site to do. No commitment required.' },
            { step: '02', title: 'Proposal', body: 'You get a clear scope, timeline, and fixed price — no hourly billing surprises.' },
            { step: '03', title: 'Build', body: 'I deliver a professional site in 3–5 weeks depending on scope. Two revision rounds included. Fast timelines depend on timely feedback and content approval on your end.' },
            { step: '04', title: 'Launch + handoff', body: 'Full ownership, a training walkthrough, and the ability to manage content yourself. Support available at $150/hr if you ever need it.' },
          ].map(({ step, title, body }) => (
            <div key={step} className="flex gap-5 rounded-2xl border border-white/10 bg-brand-slate/30 p-6">
              <span className="font-mono text-2xl font-bold text-brand-gold/30 shrink-0 w-8">
                {step}
              </span>
              <div>
                <h3 className="font-semibold text-white mb-1">{title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Design Example */}
      <section className="mb-16 rounded-2xl border border-brand-gold/20 bg-brand-slate/20 p-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold mb-3">
          A Note on Design
        </p>
        <p className="text-brand-muted leading-relaxed mb-4">
          Want to see what my work looks like? Check out WanderWise — a travel
          planning app I built and redesigned from scratch. Dark navy, gold serif
          typography, interactive maps, card-based layout. It went from looking
          like a student project to something you&apos;d pay for. That same
          attention to design is what I bring to client work.
        </p>
        <a
          href="https://wanderwise-at.fly.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-brand-gold hover:underline"
        >
          See WanderWise <ExternalLink size={13} />
        </a>
      </section>

      {/* Packages */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-bold text-white mb-8">Packages</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {packages.map(({ name, price, tag, best, timeline, includes }) => (
            <div
              key={name}
              className={`relative flex flex-col rounded-2xl border p-6 ${
                tag
                  ? 'border-brand-gold/50 bg-brand-slate/50'
                  : 'border-white/10 bg-brand-slate/30'
              }`}
            >
              {tag && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-gold px-3 py-0.5 text-xs font-bold text-brand-navy">
                  {tag}
                </span>
              )}
              <h3 className="font-serif font-bold text-white">{name}</h3>
              <p className="mt-1 text-2xl font-bold text-brand-gold">{price}</p>
              <p className="mt-1 text-xs text-brand-muted/60">{timeline}</p>
              <p className="mt-3 text-xs text-brand-muted italic">{best}</p>
              <ul className="mt-4 flex-1 space-y-2">
                {includes.map((item) => (
                  <li key={item} className="flex gap-2 text-xs text-brand-muted">
                    <CheckCircle size={12} className="text-brand-gold mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-brand-muted/50 text-center">
          All packages: 50% deposit to start · 25% at midpoint · 25% at launch.
          You own everything at final payment.
        </p>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-bold text-white mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="rounded-2xl border border-white/10 bg-brand-slate/30 p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-sm text-brand-muted leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-brand-gold/30 bg-brand-slate/30 p-8 text-center">
        <h2 className="font-serif text-2xl font-bold text-white mb-2">Let&apos;s Talk</h2>
        <p className="text-brand-muted mb-6">No pressure, no commitment. Tell me what you&apos;re working on.</p>
        <a
          href="mailto:adam@troxellendeavors.com?subject=Website%20Project%20Inquiry"
          className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-6 py-2.5 text-sm font-semibold text-brand-navy hover:bg-brand-gold-light transition-colors"
        >
          Start the conversation →
        </a>
        <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-brand-muted">
          <a href="mailto:adam@troxellendeavors.com" className="hover:text-brand-gold transition-colors">
            adam@troxellendeavors.com
          </a>
          <span className="text-white/20">·</span>
          <a href="tel:2183037742" className="hover:text-brand-gold transition-colors">
            (218) 303-7742
          </a>
        </div>
      </section>

    </div>
  )
}
