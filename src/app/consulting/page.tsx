import type { Metadata } from 'next'
import { ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Technology Consulting',
  description:
    'Vendor-neutral technology advice for real estate and commercial property firms. Software evaluation, tech stack audits, integrations, and build vs. buy decisions.',
  alternates: {
    canonical: '/consulting',
  },
  openGraph: {
    type: 'website',
    url: '/consulting',
    siteName: 'Adam Troxell',
  },
}

const CTA_MAILTO = 'mailto:adam@troxellendeavors.com?subject=Consulting%20Inquiry'

const painPoints = [
  'You pay for a CRM, a website platform, a transaction tool, and a lead service, and none of them talk to each other.',
  "A vendor demo looked great. You're not sure what you'd actually be signing up for.",
  "Your listings say one thing on your website and another in your CRM.",
  'Your team runs the real system in spreadsheets because the software never quite fit.',
  'Your buildings produce data (meters, sensors, utility bills) that nobody looks at.',
  "Someone pitched you a custom build and you can't tell if it's a smart investment or a money pit.",
]

const helpWith = [
  {
    icon: '🔍',
    title: 'Software evaluation and vendor selection',
    body: 'Before you sign a multi-year contract. I help you define what you actually need, build a shortlist, write demo scripts that make vendors show the hard parts, and flag implementation and pricing risks.',
    youGet: 'a comparison matrix and a written recommendation.',
  },
  {
    icon: '🧭',
    title: 'Tech stack audit',
    body: 'An inventory of every tool you pay for: who uses it, where it overlaps, and where the gaps are. The goal is fewer tools doing more, not more tools.',
    youGet: 'a prioritized report with cost and effort estimates.',
  },
  {
    icon: '🔌',
    title: 'Integrations and data flow',
    body: 'MLS and IDX feeds, CRM, lead routing, forms, spreadsheets, and your website. I map how data moves through your business today and design how it should move.',
    youGet: 'an integration map and a spec any developer or vendor can build from.',
  },
  {
    icon: '📡',
    title: 'Operational data for commercial property',
    body: "Sensor, meter, and equipment data turned into something useful: dashboards, alerts, and cost tracking. I've built this in production, so I know what's realistic and what's a sales pitch.",
    youGet: 'an architecture plan, hardware and platform guidance, or a working pilot.',
  },
  {
    icon: '🛠️',
    title: 'Build vs. buy and project scoping',
    body: "When off-the-shelf doesn't fit, I'll tell you whether custom is worth it and scope it so any developer can quote it accurately. If building makes sense, I can build it. If it doesn't, I'll say so.",
    youGet: 'a scope document, a realistic budget range, and a list of risks.',
  },
]

const whyWorkWithMe = [
  {
    icon: '🏢',
    title: "I've been on the vendor side",
    body: 'Nine years at FBS (Flexmls) in solutions and client-facing roles, working with 53 enterprise MLS clients. I know how real estate software gets sold, implemented, and supported, and where it tends to break down.',
  },
  {
    icon: '🧯',
    title: 'I diagnose hard problems for a living',
    body: "I did escalation engineering on Microsoft Exchange and Office 365: the cases that reached escalation because earlier tiers couldn't solve them. That root-cause habit carries into every engagement.",
  },
  {
    icon: '⚙️',
    title: 'I still build',
    body: "I've designed and deployed a production IoT platform and full-stack web applications. My recommendations are grounded in what's actually buildable, on what timeline, for what cost.",
  },
  {
    icon: '🤝',
    title: "I'm not selling you software",
    body: 'No reseller agreements, no referral fees. If the right answer is "keep what you have and use it better," that\'s what you\'ll hear.',
  },
  {
    icon: '📋',
    title: 'Business first, technology second',
    body: 'Certified Scrum Product Owner. I start with how your team works and what outcome you need, then work backward to the technology.',
  },
]

const waysToWork = [
  {
    name: 'Advisory Session',
    tagline: 'One decision, one focused conversation.',
    body: "90 minutes on a specific question: a vendor you're considering, an integration that's stuck, a quote you want a second opinion on. Written summary and next steps within two business days.",
    bestFor: 'a single, time-sensitive decision.',
  },
  {
    name: 'Assessment',
    tagline: 'A clear picture and a plan.',
    body: 'A stack audit, vendor evaluation, or integration review over 2 to 4 weeks. Includes conversations with your team, a written report, and a walkthrough call.',
    bestFor: 'firms facing a big purchase, a messy stack, or a growth push.',
  },
  {
    name: 'Ongoing Advisor',
    tagline: 'A technology lead without the full-time hire.',
    body: 'A monthly retainer for firms without a CTO or IT lead. Sit in on vendor calls, review proposals, own the roadmap, and keep developers and vendors accountable.',
    bestFor: 'growing firms making technology decisions every month.',
  },
]

const faqs = [
  {
    q: 'Do you only work with real estate firms?',
    a: "Real estate and commercial property are where I have the deepest context. Vendor evaluation, stack audits, and integration planning apply to most small and mid-sized businesses, so it's worth asking.",
  },
  {
    q: 'Are you going to try to sell me a website?',
    a: "No. Consulting stands on its own. If a build turns out to be the right answer, I'll quote it separately, or you can hand my spec to any developer you like.",
  },
  {
    q: 'Do you get paid by the vendors you recommend?',
    a: 'No referral fees, commissions, or reseller agreements. Ever.',
  },
  {
    q: 'Can you review a software contract?',
    a: 'I can flag technical and operational concerns: implementation scope, data ownership and export, integration limits, and pricing questions worth asking. Legal review belongs with your attorney.',
  },
  {
    q: 'What does it cost?',
    a: 'Every engagement is scoped and priced after the fit call, so you know the number before any work starts.',
  },
]

export default function ConsultingPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pt-28 pb-24">

      {/* Hero */}
      <div className="mb-16">
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
        <p className="mt-5 max-w-2xl text-lg text-brand-muted">
          Most tech headaches in real estate aren&apos;t code problems. They&apos;re
          vendor, data, and workflow problems. I spent nine years inside an MLS
          software company helping real estate organizations get their systems
          working. Now I help firms make technology decisions with clear eyes,
          before the contract gets signed.
        </p>
        <p className="mt-4 max-w-2xl text-brand-muted">
          Vendor-neutral. No referral fees. Plain-English recommendations you
          can act on.
        </p>
        <a
          href={CTA_MAILTO}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-gold px-6 py-2.5 text-sm font-semibold text-brand-navy hover:bg-brand-gold-light transition-colors"
        >
          Book a 30-minute fit call →
        </a>
        <p className="mt-4 text-sm text-brand-muted">
          Not sure it&apos;s a fit?{' '}
          <a href={CTA_MAILTO} className="text-brand-gold hover:underline">
            Email me a paragraph about what&apos;s going on.
          </a>
        </p>
      </div>

      {/* Sound Familiar */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-bold text-white mb-8">Sound familiar?</h2>
        <div className="rounded-2xl border border-white/10 bg-brand-slate/30 p-6">
          <ul className="space-y-3">
            {painPoints.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-brand-muted leading-relaxed">
                <span className="text-brand-gold mt-0.5 shrink-0">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-6 text-brand-muted italic">
          If any of those landed, that&apos;s the conversation I&apos;m built for.
        </p>
      </section>

      {/* What I Help With */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-bold text-white mb-8">What I Help With</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {helpWith.map(({ icon, title, body, youGet }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-brand-slate/30 p-6 flex gap-4"
            >
              <span className="text-2xl shrink-0">{icon}</span>
              <div>
                <h3 className="font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{body}</p>
                <p className="mt-3 text-xs text-brand-gold">
                  You get: <span className="text-brand-muted">{youGet}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-bold text-white mb-8">Why Work With Me</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {whyWorkWithMe.map(({ icon, title, body }) => (
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

      {/* Ways to Work Together */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-bold text-white mb-8">Ways to Work Together</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {waysToWork.map(({ name, tagline, body, bestFor }) => (
            <div
              key={name}
              className="flex flex-col rounded-2xl border border-white/10 bg-brand-slate/30 p-6"
            >
              <h3 className="font-serif text-lg font-bold text-white mb-1">{name}</h3>
              <p className="text-xs text-brand-gold/80 italic mb-4">{tagline}</p>
              <p className="text-sm text-brand-muted leading-relaxed flex-1">{body}</p>
              <p className="mt-4 text-xs text-brand-muted/50">
                <span className="font-semibold text-brand-muted">Best for:</span> {bestFor}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-brand-muted/50 text-center">
          All engagements: scoped up front · fixed price · you keep every deliverable.
        </p>
      </section>

      {/* How It Works */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-bold text-white mb-8">How It Works</h2>
        <div className="space-y-4">
          {[
            { step: '01', icon: '💬', title: 'Fit call (30 min, free)', body: "We talk through the situation. If I'm not the right person, I'll tell you, and point you somewhere better when I can." },
            { step: '02', icon: '📋', title: 'Scope and proposal', body: 'A clear written scope: deliverables, timeline, and a fixed price.' },
            { step: '03', icon: '🔎', title: 'The work', body: 'Discovery, conversations with your team, research, and analysis. You get regular updates, not silence.' },
            { step: '04', icon: '📦', title: 'Recommendations and handoff', body: 'A plain-English report, a walkthrough call, and a plan your team can act on with or without me.' },
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

      {/* From the Field */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-bold text-white mb-8">From the Field</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-brand-slate/30 overflow-hidden">
            <img
              src="/jkmf-track-record.png"
              alt="Track record section pulling live closed-deal data from Google Sheets"
              className="w-full h-40 border-b border-white/10 object-cover object-top"
            />
            <div className="p-6">
              <h3 className="font-semibold text-white mb-1">
                A track record they update like a spreadsheet
              </h3>
              <p className="text-xs text-brand-muted/60 mb-3">
                BRC Advisors · Los Angeles Apartment Broker
              </p>
              <p className="text-sm text-brand-muted leading-relaxed mb-4">
                The team already tracked closed deals in Google Sheets. Instead
                of making them log into a CMS every time a deal closes, the
                website pulls the track record live from that sheet. Adding a
                closing is as easy as adding a row.
              </p>
              <a
                href="https://losangelesapartmentbroker.com/track-record/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-brand-gold hover:underline"
              >
                View Live <ExternalLink size={11} />
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-brand-slate/30 overflow-hidden">
            <img
              src="/grafana-portfolio.png"
              alt="Production Grafana dashboard showing real-time facility sensor telemetry"
              className="w-full h-40 border-b border-white/10 object-cover object-top"
            />
            <div className="p-6">
              <h3 className="font-semibold text-white mb-1">
                Real-time facility telemetry
              </h3>
              <p className="text-xs text-brand-muted/60 mb-3">
                Dart Solutions Platform
              </p>
              <p className="text-sm text-brand-muted leading-relaxed mb-4">
                Designed and built a production platform collecting real-time
                sensor data across commercial facilities, with cost tracking
                and operational dashboards.
              </p>
              <a
                href="mailto:adam@troxellendeavors.com?subject=Dart%20Solutions%20-%20Details%20Request"
                className="inline-flex items-center gap-1.5 text-xs text-brand-gold hover:underline"
              >
                Request Details <ExternalLink size={11} />
              </a>
            </div>
          </div>
        </div>
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
        <h2 className="font-serif text-2xl font-bold text-white mb-2">
          Have a decision coming up?
        </h2>
        <p className="text-brand-muted">
          Tell me what you&apos;re weighing. If I can help, I&apos;ll tell you
          how. If I can&apos;t, I&apos;ll tell you that too.
        </p>
        <p className="mt-2 mb-6 text-brand-muted">
          I take on a limited number of consulting engagements at a time so
          each one gets real attention.
        </p>
        <a
          href={CTA_MAILTO}
          className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-6 py-2.5 text-sm font-semibold text-brand-navy hover:bg-brand-gold-light transition-colors"
        >
          Book a fit call →
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
