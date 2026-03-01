import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Code2, Building2, Cpu } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Adam Troxell — Full-Stack Engineer',
  description:
    'Full-stack engineer and hands-on former CTO. 9 years in real estate tech. Built a production IoT platform from zero.',
}

const stats = [
  { icon: Code2, value: '9+', label: 'Years in Tech' },
  { icon: Cpu,      value: '50+', label: 'Production Sensors' },
  { icon: Building2, value: '2',   label: 'Commercial Sites' },
]

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">

      {/* Background decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Gold glow top-right */}
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-brand-gold/5 blur-[120px]" />
        {/* Subtle blue-teal glow bottom-left */}
        <div className="absolute bottom-0 -left-40 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[120px]" />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Hero */}
      <div className="mx-auto max-w-3xl text-center">

        {/* Eyebrow badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-gold animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
            Available for hire
          </span>
        </div>

        <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl text-balance">
          I build software that{' '}
          <span className="text-brand-gold italic">holds up in production.</span>
        </h1>

        <p className="mt-6 text-lg text-brand-muted sm:text-xl max-w-2xl mx-auto">
          Full-stack engineer and hands-on former CTO. I ship end-to-end systems
          across web, data, and IoT — built for reliability, not demos.
        </p>

        <p className="mt-2 text-sm text-brand-muted/50">
          9 years in real estate tech · Built a production IoT platform from zero
        </p>

        {/* Stats row */}
        <div className="mt-10 flex justify-center gap-8">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <Icon size={16} className="text-brand-gold/60" />
              <span className="font-serif text-2xl font-bold text-white">{value}</span>
              <span className="text-xs text-brand-muted/60">{label}</span>
            </div>
          ))}
        </div>

        {/* CTA Cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <Link
            href="/hire"
            className="group relative flex flex-col rounded-2xl border border-white/10 bg-brand-slate/50 p-6 text-left transition-all hover:border-brand-gold/50 hover:bg-brand-slate overflow-hidden"
          >
            {/* Card glow on hover */}
            <div className="absolute inset-0 rounded-2xl bg-brand-gold/0 group-hover:bg-brand-gold/5 transition-colors" />
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
              For Employers
            </span>
            <span className="mt-2 font-serif text-xl font-bold text-white group-hover:text-brand-gold transition-colors">
              Hiring a developer?
            </span>
            <span className="mt-1 text-sm text-brand-muted">
              Resume, case studies, and technical depth
            </span>
            <div className="mt-4 flex items-center gap-1.5 text-xs text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity">
              View profile <ArrowRight size={13} />
            </div>
          </Link>

          <Link
            href="/work"
            className="group relative flex flex-col rounded-2xl border border-white/10 bg-brand-slate/50 p-6 text-left transition-all hover:border-brand-gold/50 hover:bg-brand-slate overflow-hidden"
          >
            <div className="absolute inset-0 rounded-2xl bg-brand-gold/0 group-hover:bg-brand-gold/5 transition-colors" />
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
              For Clients
            </span>
            <span className="mt-2 font-serif text-xl font-bold text-white group-hover:text-brand-gold transition-colors">
              Need a website or tech partner?
            </span>
            <span className="mt-1 text-sm text-brand-muted">
              Custom websites for real estate and local businesses
            </span>
            <div className="mt-4 flex items-center gap-1.5 text-xs text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity">
              See services <ArrowRight size={13} />
            </div>
          </Link>
        </div>
      </div>

      {/* Credibility bar */}
      <div className="mt-16 w-full max-w-3xl">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 rounded-2xl border border-white/5 bg-white/[0.02] px-6 py-5">
          {[
            { value: 'RJ Energy Solutions', label: 'Former CTO' },
            { value: 'FBS / Flexmls',       label: '9 Years' },
            { value: '50+',                 label: 'Production Sensors' },
            { value: '2',                   label: 'Commercial Sites' },
            { value: 'Full-Stack',          label: 'Web · Data · IoT' },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center text-center gap-0.5">
              <span className="text-sm font-semibold text-white/80">{value}</span>
              <span className="text-xs text-brand-muted/50">{label}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
