import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Adam Troxell — Full-Stack Engineer',
  description:
    'Full-stack engineer and hands-on former CTO. 9 years in real estate tech. Built a production IoT platform from zero.',
}

const credBar = [
  'RJ Energy Solutions (CTO)',
  'FBS / Flexmls (9 yrs)',
  'IoT platform in production',
  '50+ sensors',
  'Full-stack',
]

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-16">

      {/* Hero */}
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl text-balance">
          I build software that{' '}
          <span className="text-brand-gold italic">holds up in production.</span>
        </h1>

        <p className="mt-6 text-lg text-brand-muted sm:text-xl">
          Full-stack engineer and hands-on former CTO. I ship end-to-end systems
          across web, data, and IoT — built for reliability, not demos.
        </p>

        <p className="mt-2 text-sm text-brand-muted/70">
          9 years in real estate tech. Built a production IoT platform from zero.
        </p>

        {/* CTA Cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <Link
            href="/hire"
            className="group flex flex-col rounded-2xl border border-white/10 bg-brand-slate/50 p-6 text-left transition-all hover:border-brand-gold/50 hover:bg-brand-slate"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
              For Employers
            </span>
            <span className="mt-2 font-serif text-xl font-bold text-white group-hover:text-brand-gold transition-colors">
              Hiring a developer?
            </span>
            <span className="mt-1 text-sm text-brand-muted">
              Resume, case studies, and technical depth
            </span>
            <ArrowRight
              size={18}
              className="mt-4 text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </Link>

          <Link
            href="/work"
            className="group flex flex-col rounded-2xl border border-white/10 bg-brand-slate/50 p-6 text-left transition-all hover:border-brand-gold/50 hover:bg-brand-slate"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
              For Clients
            </span>
            <span className="mt-2 font-serif text-xl font-bold text-white group-hover:text-brand-gold transition-colors">
              Need a website or tech partner?
            </span>
            <span className="mt-1 text-sm text-brand-muted">
              Custom websites for real estate and local businesses
            </span>
            <ArrowRight
              size={18}
              className="mt-4 text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </Link>
        </div>
      </div>

      {/* Credibility bar */}
      <div className="mt-16 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        {credBar.map((item, i) => (
          <span key={item} className="flex items-center gap-6">
            <span className="text-xs text-brand-muted/60">{item}</span>
            {i < credBar.length - 1 && (
              <span className="text-brand-muted/20">·</span>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}
