import type { Metadata } from 'next'
import { Download, Mail, Linkedin, Github, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hire Adam Troxell — Senior Full-Stack Engineer',
  description:
    'Full-stack engineer and hands-on former CTO open to senior roles. IoT platforms, React, FastAPI, PostgreSQL, TypeScript.',
}

export default function HirePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pt-28 pb-24">

      {/* Hero */}
      <div className="mb-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold mb-4">
          Available for hire
        </p>
        <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl text-balance">
          Full-Stack Engineer.{' '}
          <span className="text-brand-gold italic">Hands-On Former CTO.</span>{' '}
          I build real systems.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-brand-muted">
          I&apos;m open to senior roles where I can own meaningful problems end to
          end — from backend and data to product and UI. I do my best work when I
          can ship, operate, and iterate in production.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/resume.pdf"
            className="flex items-center gap-2 rounded-full bg-brand-gold px-5 py-2 text-sm font-semibold text-brand-navy hover:bg-brand-gold-light transition-colors"
          >
            <Download size={15} /> Download Resume
          </a>
          <a
            href="mailto:adam@troxellendeavors.com"
            className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white hover:border-brand-gold hover:text-brand-gold transition-colors"
          >
            <Mail size={15} /> Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/adam-troxell1/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white hover:border-brand-gold hover:text-brand-gold transition-colors"
          >
            <Linkedin size={15} /> LinkedIn
          </a>
          <a
            href="https://github.com/adamtxl"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white hover:border-brand-gold hover:text-brand-gold transition-colors"
          >
            <Github size={15} /> GitHub
          </a>
        </div>
      </div>

      {/* Featured Build — above the fold proof */}
      <div className="mb-16 rounded-2xl border border-brand-gold/20 bg-gradient-to-br from-brand-slate/60 to-brand-slate/20 p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold mb-4">
          Featured Build
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="flex-1">
            <h2 className="font-serif text-xl font-bold text-white mb-1">
              Dart Solutions Platform
            </h2>
            <p className="text-sm text-brand-muted mb-4">
              End-to-end IoT telemetry platform for commercial facilities —
              designed, built, and operated as sole engineer and CTO.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { value: '50+',    label: 'Active sensors' },
                { value: '<2 min', label: 'Alert latency'  },
                { value: '99.9%',  label: 'Uptime'         },
                { value: '2',      label: 'Commercial sites'},
              ].map(({ value, label }) => (
                <div key={label} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-center">
                  <div className="font-mono text-sm font-bold text-brand-gold">{value}</div>
                  <div className="text-xs text-brand-muted/60">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <a
            href="mailto:adam@troxellendeavors.com?subject=Dart%20Solutions%20-%20Details%20Request"
            className="shrink-0 rounded-full border border-brand-gold px-5 py-2 text-sm font-medium text-brand-gold hover:bg-brand-gold hover:text-brand-navy transition-all"
          >
            Request details →
          </a>
        </div>
      </div>
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-bold text-white mb-8">What I Bring</h2>
        <div className="grid gap-6 sm:grid-cols-1">
          {[
            {
              title: 'Nine years in real estate technology',
              body: "I spent nine years at FBS Systems (Flexmls), one of the largest MLS platforms in the country. I started in support and moved into solutions and escalation work, helping teams integrate and operate complex software. That background shows up in how I build: pragmatic, supportable, and built for real users.",
            },
            {
              title: 'Production IoT platform from zero',
              body: "As CTO and sole engineer at RJ Energy Solutions, I designed and shipped an end-to-end IoT telemetry platform for commercial facilities. I owned sensor integration, data pipeline, alerting, dashboards, cloud infrastructure, and production operations. No team. No playbook. Just requirements and a blank canvas.",
            },
            {
              title: 'Pragmatic software, not clever code',
              body: "I optimize for maintainability and real-world reliability. I've been the person debugging production issues under pressure, and I build accordingly — code that holds up at 2am, not just in a PR review.",
            },
          ].map(({ title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-brand-slate/30 p-6"
            >
              <h3 className="font-serif text-lg font-semibold text-brand-gold mb-2">
                {title}
              </h3>
              <p className="text-brand-muted leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Profile */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-bold text-white mb-6">Technical Profile</h2>
        <div className="rounded-2xl border border-white/10 bg-brand-slate/30 p-6 grid gap-3 sm:grid-cols-2">
          {[
            { label: 'Frontend',        value: 'React, Redux, Bootstrap' },
            { label: 'Backend',         value: 'FastAPI (Python), Node.js, Express' },
            { label: 'Data',            value: 'PostgreSQL, TimescaleDB' },
            { label: 'Infrastructure',  value: 'OCI, Fly.io, Vercel' },
            { label: 'IoT / Protocols', value: 'LoRaWAN, ChirpStack, Dragino, MQTT' },
            { label: 'Languages',       value: 'Python, JavaScript, TypeScript' },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-0.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-gold">
                {label}
              </span>
              <span className="text-sm text-brand-muted">{value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Case Study */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-bold text-white mb-2">
          Case Study: Dart Solutions Platform
        </h2>
        <p className="text-brand-muted/60 text-sm mb-8">
          Production IoT telemetry platform · RJ Energy Solutions
        </p>

        <div className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-brand-slate/30 p-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-gold mb-3">
              The Situation
            </h3>
            <p className="text-brand-muted leading-relaxed">
              RJ Energy Solutions needed real-time visibility into industrial
              equipment across multiple commercial sites. Existing tools required
              manual monitoring and couldn&apos;t coordinate across locations.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-brand-slate/30 p-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-gold mb-3">
              What I Built
            </h3>
            <p className="text-brand-muted leading-relaxed">
              A production IoT platform handling the full data lifecycle — from
              LoRaWAN sensor transmission through ChirpStack gateway management,
              into a FastAPI ingestion layer, stored in TimescaleDB, and surfaced
              through a React dashboard with role-based access and real-time alerting.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-brand-slate/30 p-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-gold mb-3">
                Constraints
              </h3>
              <ul className="space-y-2 text-sm text-brand-muted">
                {[
                  'Multi-tenant architecture from day one',
                  'Alert latency under 2 minutes end-to-end',
                  'LoRaWAN codec complexity across Dragino sensor types',
                  '24/7 uptime on live production sites',
                ].map((c) => (
                  <li key={c} className="flex gap-2">
                    <span className="text-brand-gold mt-0.5">→</span> {c}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-brand-slate/30 p-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-gold mb-3">
                Results
              </h3>
              <ul className="space-y-2 text-sm text-brand-muted">
                {[
                  '50+ active sensors across 2 commercial sites',
                  'No missed alerts during production rollout',
                  '99.9% uptime across deployment period',
                  'Eliminated manual equipment checks',
                  'Multi-tenant dashboard for multiple orgs',
                ].map((r) => (
                  <li key={r} className="flex gap-2">
                    <span className="text-brand-gold mt-0.5">✓</span> {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-brand-slate/30 p-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-gold mb-3">
              What I Owned
            </h3>
            <p className="text-sm text-brand-muted leading-relaxed">
              Platform architecture · Sensor integration & codec development ·
              Real-time ingestion pipeline · Alert rule engine · React dashboards ·
              PostgreSQL/TimescaleDB schema · ChirpStack & gateway management ·
              OCI/Fly.io/Vercel deployment · Production monitoring & incident
              response · Multi-tenant data isolation
            </p>
          </div>
        </div>

        <p className="mt-4 text-xs text-brand-muted/50 italic">
          Production system serving live commercial clients. Code and architecture
          details available upon request.
        </p>
        <a
          href="mailto:adam@troxellendeavors.com?subject=Dart%20Solutions%20-%20Details%20Request"
          className="mt-3 inline-flex items-center gap-1.5 text-sm text-brand-gold hover:underline"
        >
          Request details <ExternalLink size={13} />
        </a>
      </section>

      {/* Also Worth Knowing */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-bold text-white mb-6">Also Worth Knowing</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-brand-slate/30 p-6">
            <h3 className="font-semibold text-white mb-2">WanderWise</h3>
            <p className="text-sm text-brand-muted mb-4 leading-relaxed">
              A full-featured travel planning platform I built and actively use — complete
              product overhaul with custom design system, dark navy + gold UI, interactive
              maps, day-by-day itinerary builder, collaborative trip planning, and packing
              lists. Built to eventually be a real product.
            </p>
            <p className="text-xs text-brand-muted/50 mb-3">
              React · Redux · Express · Node.js · PostgreSQL
            </p>
            <a
              href="https://wanderwise-at.fly.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-brand-gold hover:underline"
            >
              Live Demo <ExternalLink size={13} />
            </a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-brand-slate/30 p-6">
            <h3 className="font-semibold text-white mb-2">Energy Audit Portal</h3>
            <p className="text-sm text-brand-muted mb-4 leading-relaxed">
              Replaced a manual spreadsheet workflow with a structured multi-stage audit
              pipeline — role-based access, data validation, automated PDF report
              generation. Compressed a 2-day process into a real-time workflow.
            </p>
            <p className="text-xs text-brand-muted/50 mb-3">
              React · Redux · Express · Node.js · Material UI
            </p>
            <a
              href="https://github.com/adamtxl/energy-solutions-portal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-brand-gold hover:underline"
            >
              GitHub <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </section>

      {/* Let's Talk */}
      <section className="rounded-2xl border border-brand-gold/30 bg-brand-slate/30 p-8 text-center">
        <h2 className="font-serif text-2xl font-bold text-white mb-2">Let&apos;s Talk</h2>
        <p className="text-brand-muted mb-6">
          Based in West Fargo, ND. Open to remote and relocation — for the right
          role, geography is flexible.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-brand-muted">
          <a href="mailto:adam@troxellendeavors.com" className="hover:text-brand-gold transition-colors">
            adam@troxellendeavors.com
          </a>
          <span className="text-white/20">·</span>
          <a href="tel:2183037742" className="hover:text-brand-gold transition-colors">
            (218) 303-7742
          </a>
          <span className="text-white/20">·</span>
          <a href="https://www.linkedin.com/in/adam-troxell1/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">
            LinkedIn
          </a>
          <span className="text-white/20">·</span>
          <a href="https://github.com/adamtxl" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">
            GitHub
          </a>
        </div>
        <a
          href="/resume.pdf"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-gold px-6 py-2.5 text-sm font-semibold text-brand-navy hover:bg-brand-gold-light transition-colors"
        >
          <Download size={15} /> Download Resume
        </a>
      </section>

    </div>
  )
}
