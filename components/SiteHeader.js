'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { X } from 'lucide-react'
import { profile, contact } from '../data/portfolio'

const links = [
  { name: 'Home', path: '/' },
  { name: 'Experience', path: '/exp' },
  { name: 'Contact', path: '/contact' },
]

/**
 * Top bar + full-screen menu, shared by every page.
 * overHero: on the homepage the bar is transparent with white text over the
 * photo, then turns into a frosted white bar once you scroll.
 */
export default function SiteHeader({ overHero = false }) {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock page scroll while the menu is open, close on Escape
  useEffect(() => {
    if (!menuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  const solid = !overHero || scrolled

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          solid ? 'bg-white/75 py-3 text-black shadow-sm backdrop-blur-lg' : 'bg-transparent py-5 text-white md:py-6'
        }`}
        style={{ paddingTop: 'max(env(safe-area-inset-top), 0.75rem)' }}
      >
        <div className="mx-auto flex max-w-screen-xl items-center justify-between px-6">
          <Link href="/" className="font-serif text-lg font-medium uppercase tracking-[0.4em]">
            {profile.shortName}
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="group -mr-3 flex h-12 w-12 flex-col items-end justify-center gap-1.5 p-3"
          >
            <span className="block h-px w-6 bg-current" />
            <span className="block h-px w-4 bg-current transition-all group-hover:w-6" />
          </button>
        </div>
      </nav>

      {/* Full-screen menu */}
      <div
        inert={!menuOpen}
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-[100] flex flex-col bg-white transition-all duration-700 ease-[cubic-bezier(0.8,0,0.2,1)] ${
          menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="flex items-center justify-between px-6 pt-[max(env(safe-area-inset-top),1.25rem)]">
          <span className="font-serif text-lg font-medium uppercase tracking-[0.4em]">{profile.shortName}</span>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="-mr-3 flex h-12 w-12 items-center justify-center"
          >
            <X size={30} strokeWidth={1} />
          </button>
        </div>

        <div className="flex flex-1 flex-col justify-center space-y-4 px-10 md:space-y-6">
          {links.map((item, i) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setMenuOpen(false)}
              aria-current={pathname === item.path ? 'page' : undefined}
              className={`block font-serif text-5xl font-light transition-all duration-500 hover:italic md:text-8xl ${
                pathname === item.path ? 'italic text-neutral-400' : ''
              } ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: menuOpen ? `${200 + i * 100}ms` : '0ms' }}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex gap-8 px-10 pb-[max(env(safe-area-inset-bottom),2rem)] text-[11px] uppercase tracking-[0.3em]">
          <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="py-2 hover:opacity-50">
            Instagram
          </a>
          <a href={contact.facebook} target="_blank" rel="noopener noreferrer" className="py-2 hover:opacity-50">
            Facebook
          </a>
        </div>
      </div>
    </>
  )
}
