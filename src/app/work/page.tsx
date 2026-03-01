import type { Metadata } from 'next'
import { ExternalLink, CheckCircle, Plus } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Web Development for Real Estate & Local Business',
  description:
    'Custom websites for commercial real estate firms and local businesses. You own everything, no monthly platform fees.',
}

const packages = [
  {
    name: 'Professional Foundation',
    platform: 'WordPress',
    tag: null,
    best: 'Best for getting a professional presence launched quickly with full content control.',
    timeline: '3–4 weeks from content delivery',
    includes: [
      'Home, about, listings showcase, lead capture, contact',
      'CMS — update listings yourself, no developer needed',
      'Mobile-responsive on all devices',
      'SEO basics + Google Analytics',
      'Up to 10 listings loaded at launch',
      '2 rounds of revisions',
      'Training on how to manage your content',
    ],
    addons: [
      'Individual listing detail pages',
      'Listings filtering (by type, status, area)',
      'Enhanced lead funnels',
      'Full SEO launch optimization',
      'Video embedding',
      'Blog / resources section',
      '1031 Exchange info page',
      'Track record / closings section',
    ],
  },
  {
    name: 'Custom Build',
    platform: 'Next.js / React',
    tag: 'Maximum Performance',
    best: 'Best for firms that want a fully custom, high-performance site with advanced functionality.',
    timeline: '5–7 weeks from content delivery',
    includes: [
      'Everything in Professional Foundation',
      'Fully custom design — no templates',
      'React / Next.js for maximum speed and SEO',
      'Headless CMS for flexible content management',
      'Advanced lead funnels and conversion tracking',
      'MLS integration exploration and scoping',
      'Priority turnaround on updates',
      'Quarterly strategy call — first year',
    ],
    addons: [
      'Custom analytics dashboard',
      'CRM integration',
      'Advanced search and filtering',
      'Interactive maps and property visualization',
      'Multi-agent or team portals',
      'Ongoing retainer support',
    ],
  },
]

const faqs = [
  {
    q: 'How does pricing work?',
    a: "Every project is scoped and priced based on your specific needs. I'll send a clear, fixed-price proposal after our discovery call — no hourly billing surprises. Payment is structured in milestones: deposit to start, midpoint, and launch.",
  },
  {
    q: 'Do I have to pay a monthly fee after launch?',
    a: 'No platform fees. Your only ongoing cost is hosting — typically $15–50/month depending on your setup, paid directly to the host. Support is available hourly if you need updates, or you can manage content yourself.',
  },
  {
    q: 'How is this different from Wix or those $300/month real estate platforms?',
    a: "Those platforms rent you software — when you stop paying, your site goes dark. What I build is yours: no monthly platform fee, no vendor lock-in, full control. You can take it to any developer, host it anywhere, and it keeps running whether you pay me or not.",
  },
  {
    q: 'Which package is right for me?',
    a: "If you need to get launched quickly with a professional presence and plan to manage your own content, Professional Foundation is the right starting point. If you want maximum performance, custom design, and advanced functionality, the Custom Build is worth the investment. We can talk through it on a discovery call.",
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
              icon: '🏢',
              title: 'I know your industry',
              body: "Nine years at FBS Systems (Flexmls) supporting hundreds of real estate professionals. I don't need a crash course in how your business works.",
            },
            {
              icon: '🔑',
              title: 'You own what I build',
              body: 'No monthly platform fees. No vendor lock-in. Ongoing hosting typically runs $15–50/month — paid directly to the host. The site is yours, forever.',
            },
            {
              icon: '⚙️',
              title: 'Senior engineering applied to marketing sites',
              body: "I've built production systems handling real-time data across commercial facilities. Professional execution, on schedule, with clear communication.",
            },
            {
              icon: '📞',
              title: 'One point of contact',
              body: 'You talk to me. I build it. No handoffs to offshore teams or junior developers.',
            },
          ].map(({ icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-brand-slate/30 p-6 flex gap-4"
            >
              <span className="text-2xl shrink-0">{icon}</span>
              <div>
                <h3 className="font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What I Build */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-bold text-white mb-8">What I Build</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-brand-slate/30 p-6">
            <div className="text-3xl mb-4">🏙️</div>
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
            <div className="text-3xl mb-4">🏪</div>
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
            { step: '01', icon: '💬', title: 'Discovery call (~30 min)', body: 'We talk about your goals, your clients, and what you need the site to do. No commitment required.' },
            { step: '02', icon: '📋', title: 'Proposal', body: 'You get a clear scope, timeline, and fixed price — no hourly billing surprises.' },
            { step: '03', icon: '🔨', title: 'Build', body: 'I deliver a professional site in 3–7 weeks depending on scope. Two revision rounds included. Fast timelines depend on timely feedback and content approval on your end.' },
            { step: '04', icon: '🚀', title: 'Launch + handoff', body: 'Full ownership, a training walkthrough, and the ability to manage content yourself. Support available hourly if you ever need it.' },
          ].map(({ step, icon, title, body }) => (
            <div key={step} className="flex gap-5 rounded-2xl border border-white/10 bg-brand-slate/30 p-6">
              <div className="flex flex-col items-center gap-1 shrink-0">
                <span className="text-2xl">{icon}</span>
                <span className="font-mono text-xs font-bold text-brand-gold/40">{step}</span>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">{title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Work */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-bold text-white mb-2">Recent Work</h2>
        <p className="text-brand-muted text-sm mb-8">
          A sample of what I build — from production platforms to polished product UIs.
        </p>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              img: '/wanderwise-screenshot.png',
              alt: 'WanderWise travel planning app — dark navy UI with trip dashboard',
              title: 'WanderWise',
              desc: 'Full product redesign — custom design system, interactive maps, itinerary builder.',
              tag: 'Product Design',
              link: 'https://wanderwise-at.fly.dev/',
              linkLabel: 'Live Demo',
            },
            {
              img: '/grafana-portfolio.png',
              alt: 'Production Grafana dashboard showing real-time IoT sensor telemetry',
              title: 'Dart Solutions Platform',
              desc: 'Production IoT platform — real-time sensor data, cost tracking, operational metrics.',
              tag: 'Production System',
              link: 'mailto:adam@troxellendeavors.com?subject=Dart%20Solutions%20-%20Details%20Request',
              linkLabel: 'Request Details',
            },
            {
              img: '/energy-audit-screenshot.png',
              alt: 'Energy Audit Portal showing completed facility audit report with calculations',
              title: 'Energy Audit Portal',
              desc: 'Workflow automation — multi-stage approvals, PDF generation, role-based access.',
              tag: 'Workflow Tool',
              link: 'https://github.com/adamtxl/energy-solutions-portal',
              linkLabel: 'GitHub',
            },
          ].map(({ img, alt, title, desc, tag, link, linkLabel }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-brand-slate/30 overflow-hidden flex flex-col">
              <img src={img} alt={alt} className="w-full border-b border-white/10 object-cover object-top h-40" />
              <div className="p-5 flex flex-col flex-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-gold mb-1">{tag}</span>
                <h3 className="font-semibold text-white mb-1">{title}</h3>
                <p className="text-xs text-brand-muted leading-relaxed flex-1">{desc}</p>
                <a
                  href={link}
                  target={link.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs text-brand-gold hover:underline"
                >
                  {linkLabel} <ExternalLink size={11} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Design Example */}
      <section className="mb-16 rounded-2xl border border-brand-gold/20 bg-brand-slate/20 p-8">
        <div className="text-3xl mb-3">✈️</div>
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
        <h2 className="font-serif text-2xl font-bold text-white mb-2">Packages</h2>
        <p className="text-brand-muted mb-8 text-sm">
          Every project is scoped individually. These packages are starting points —
          we&apos;ll tailor the scope and price to what you actually need.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {packages.map(({ name, platform, tag, best, timeline, includes, addons }) => (
            <div
              key={name}
              className={`relative flex flex-col rounded-2xl border p-6 ${
                tag
                  ? 'border-brand-gold/50 bg-brand-slate/50'
                  : 'border-white/10 bg-brand-slate/30'
              }`}
            >
              {tag && (
                <span className="absolute -top-3 left-6 rounded-full bg-brand-gold px-3 py-0.5 text-xs font-bold text-brand-navy">
                  {tag}
                </span>
              )}
              <div className="mb-4">
                <h3 className="font-serif text-lg font-bold text-white">{name}</h3>
                <span className="inline-block mt-1 rounded-full border border-white/20 px-2.5 py-0.5 text-xs text-brand-muted">
                  {platform}
                </span>
              </div>
              <p className="text-xs text-brand-muted italic mb-4">{best}</p>
              <p className="text-xs text-brand-gold/60 mb-4">⏱ {timeline}</p>

              <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-gold mb-2">
                Included
              </h4>
              <ul className="mb-6 flex-1 space-y-2">
                {includes.map((item) => (
                  <li key={item} className="flex gap-2 text-xs text-brand-muted">
                    <CheckCircle size={12} className="text-brand-gold mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-muted/50 mb-2">
                Popular Add-ons
              </h4>
              <ul className="space-y-1.5">
                {addons.map((item) => (
                  <li key={item} className="flex gap-2 text-xs text-brand-muted/50">
                    <Plus size={11} className="mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-brand-muted/50 text-center">
          All projects: fixed price · milestone payments · you own everything at final payment.
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
        <div className="text-4xl mb-4">👋</div>
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
