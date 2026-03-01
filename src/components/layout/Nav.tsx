'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { href: '/hire',        label: 'For Employers' },
  { href: '/work',        label: 'For Clients'   },
  { href: '/consulting',  label: 'Consulting'    },
]

export function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-brand-navy/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-lg font-bold tracking-tight text-white hover:text-brand-gold transition-colors"
        >
          Adam Troxell
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-brand-gold',
                pathname === href ? 'text-brand-gold' : 'text-brand-muted'
              )}
            >
              {label}
            </Link>
          ))}
          <a
            href="mailto:adam@troxellendeavors.com"
            className="rounded-full border border-brand-gold px-4 py-1.5 text-sm font-medium text-brand-gold hover:bg-brand-gold hover:text-brand-navy transition-all"
          >
            Contact
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-brand-muted hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-white/10 bg-brand-navy px-6 py-4 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={cn(
                'text-sm font-medium transition-colors hover:text-brand-gold',
                pathname === href ? 'text-brand-gold' : 'text-brand-muted'
              )}
            >
              {label}
            </Link>
          ))}
          <a
            href="mailto:adam@troxellendeavors.com"
            className="text-sm font-medium text-brand-gold"
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  )
}
