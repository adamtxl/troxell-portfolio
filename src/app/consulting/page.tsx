import type { Metadata } from 'next'
import { ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Technology Consulting',
  description:
    'Vendor-neutral technology advice for businesses without an IT department. Software evaluation, tech stack audits, platform migrations, and integrations, backed by nine years in real estate technology.',
  alternates: {
    canonical: '/consulting',
  },
  openGraph: {
    type: 'website',
    url: '/consulting',
    siteName: 'Adam Troxell',
  },
}

// No scheduling tool (Cal.com, Calendly, SavvyCal, etc.) is wired up yet, so this
// falls back to a mailto inquiry. Swap in a booking URL here when one exists, and
// open it in a new tab with rel="noopener noreferrer".
const CONSULTING_CTA_URL = 'mailto:adam@troxellendeavors.com?subject=Consulting%20Inquiry'

const painPoints = [
  'You pay for a CRM, a website platform, an email tool, and a scheduling app, and none of them talk to each other.',
  "A vendor demo looked great. You're not sure what you'd actually be signing up for.",
  "Your website, email platform, and CRM each think they're the source of truth.",
  "You need to switch platforms, and you're worried about what breaks: your data, your integrations, or whether your emails still land in the inbox.",
  'Your team runs the real system in spreadsheets because the software never quite fit.',
  'If you own or manage property, your buildings produce data (meters, sensors, utility bills) that nobody looks at.',
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
    icon: '🚚',
    title: 'Platform migrations',
    body: 'Moving your email, CRM, or website to a new platform without losing data, breaking integrations, or landing in spam folders. I plan the cutover, handle the details that usually get missed, like DNS records, sender authentication, and leftover embed code, and verify everything works afterward.',
    youGet: 'a migration plan, a clean cutover, and a post-move checklist.',
  },
  {
    icon: '🔌',
    title: 'Integrations and data flow',
    body: 'CRM, email and marketing tools, forms, spreadsheets, MLS and IDX feeds, and your website. I map how data moves through your business today and design how it should move.',
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
    q: 'Do I need to be in real estate?',
    a: "No. Real estate is where my experience runs deepest, but tools that don't talk to each other, risky vendor decisions, and messy migrations show up in every kind of business.",
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
            businesses without an IT department
          </span>
          .
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-brand-muted">
          Most tech headaches aren&apos;t code problems. They&apos;re vendor,
          data, and workflow problems. I spent nine years inside a real estate
          software company helping organizations get their systems working,
          and I&apos;ve since built production platforms and moved clients off
          tools that weren&apos;t working for them. Now I help businesses make
          technology decisions with clear eyes, before the contract gets
          signed.
        </p>
        <p className="mt-4 max-w-2xl text-brand-muted">
          Vendor-neutral. No referral fees. Plain-English recommendations you
          can act on.
        </p>
        <a
          href={CONSULTING_CTA_URL}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-gold px-6 py-2.5 text-sm font-semibold text-brand-navy hover:bg-brand-gold-light transition-colors"
        >
          Request a 30-minute fit call →
        </a>
        <p className="mt-4 text-sm text-brand-muted">
          Not sure it&apos;s a fit?{' '}
          <a href={CONSULTING_CTA_URL} className="text-brand-gold hover:underline">
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
        <div className="grid gap-4 sm:grid-cols-2 sm:[&>*:last-child:nth-child(odd)]:col-span-2">
          {helpWith.map(({ icon, title, body, youGet }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-brand-slate/30 p-6 flex gap-4"
            >
              <span className="text-2xl shrink-0">{icon}</span>
              <div className="max-w-[65ch]">
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
        <div className="grid gap-4 sm:grid-cols-2 sm:[&>*:last-child:nth-child(odd)]:col-span-2">
          {whyWorkWithMe.map(({ icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-brand-slate/30 p-6 flex gap-4"
            >
              <span className="text-2xl shrink-0">{icon}</span>
              <div className="max-w-[65ch]">
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
        <div className="grid gap-6 sm:grid-cols-2 sm:[&>*:last-child:nth-child(odd)]:col-span-2">
          {waysToWork.map(({ name, tagline, body, bestFor }) => (
            <div
              key={name}
              className="flex flex-col rounded-2xl border border-white/10 bg-brand-slate/30 p-6"
            >
              <h3 className="font-serif text-lg font-bold text-white mb-1">{name}</h3>
              <p className="text-xs text-brand-gold/80 italic mb-4">{tagline}</p>
              <p className="text-sm text-brand-muted leading-relaxed flex-1 max-w-[65ch]">{body}</p>
              <p className="mt-4 text-xs text-brand-muted">
                <span className="font-semibold text-brand-muted">Best for:</span> {bestFor}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-brand-muted text-center">
          All engagements: scoped up front · fixed price · you keep every deliverable.
        </p>
      </section>

      {/* How It Works */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-bold text-white mb-8">How It Works</h2>
        <div className="space-y-4">
          {[
            { step: '01', title: 'Fit call (30 min, free)', body: "We talk through the situation. If I'm not the right person, I'll tell you, and point you somewhere better when I can." },
            { step: '02', title: 'Scope and proposal', body: 'A clear written scope: deliverables, timeline, and a fixed price.' },
            { step: '03', title: 'The work', body: 'Discovery, conversations with your team, research, and analysis. You get regular updates, not silence.' },
            { step: '04', title: 'Recommendations and handoff', body: 'A plain-English report, a walkthrough call, and a plan your team can act on with or without me.' },
          ].map(({ step, title, body }) => (
            <div key={step} className="rounded-2xl border border-white/10 bg-brand-slate/30 p-6">
              <div className="flex items-center gap-4 mb-2">
                <span className="shrink-0 font-serif text-3xl font-bold leading-none text-brand-gold">
                  {step}
                </span>
                <h3 className="font-semibold text-white">{title}</h3>
              </div>
              <p className="text-sm text-brand-muted leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* From the Field */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-bold text-white mb-8">From the Field</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-brand-slate/30 overflow-hidden">
            <div className="border-b border-white/10 bg-brand-slate/50 p-2">
              <div className="relative aspect-video overflow-hidden rounded-lg border border-white/10">
                <img
                  src="/jkmf-track-record.png"
                  alt="Closed-deal track record table with property, sale price, and unit count columns, sorted by price"
                  className="absolute inset-0 h-full w-full origin-top-left scale-150 object-cover"
                />
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-white mb-1">
                A track record they update like a spreadsheet
              </h3>
              <p className="text-xs text-brand-muted mb-3">
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
            <div className="border-b border-white/10 bg-brand-slate/50 p-2">
              <div className="relative aspect-video overflow-hidden rounded-lg border border-white/10">
                <img
                  src="/grafana-portfolio.png"
                  alt="Production Grafana dashboard showing total facility cost and real-time sensor telemetry charts"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-white mb-1">
                Real-time facility telemetry
              </h3>
              <p className="text-xs text-brand-muted mb-3">
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
          href={CONSULTING_CTA_URL}
          className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-6 py-2.5 text-sm font-semibold text-brand-navy hover:bg-brand-gold-light transition-colors"
        >
          Request a fit call →
        </a>
        <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-brand-muted">
          <a
            href="mailto:adam@troxellendeavors.com"
            className="underline decoration-white/20 underline-offset-4 hover:text-brand-gold hover:decoration-brand-gold transition-colors"
          >
            adam@troxellendeavors.com
          </a>
          <span className="text-white/20">·</span>
          <a
            href="tel:2183037742"
            className="underline decoration-white/20 underline-offset-4 hover:text-brand-gold hover:decoration-brand-gold transition-colors"
          >
            (218) 303-7742
          </a>
        </div>
      </section>

    </div>
  )
}
