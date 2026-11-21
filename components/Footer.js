import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import { profile, contact } from '../data/portfolio'

// cta: show the "Let's work together" call-to-action above the footer line
export default function Footer({ cta = true }) {
  return (
    <footer className="border-t border-neutral-100 bg-white px-6 pb-[max(env(safe-area-inset-bottom),2.5rem)] pt-16 md:pt-24">
      <div className="mx-auto max-w-screen-xl">
        {cta && (
          <Reveal className="mb-16 md:mb-24">
            <p className="mb-5 text-[10px] uppercase tracking-[0.4em] text-neutral-400">Available for bookings</p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-4 font-serif text-5xl leading-none md:text-[7vw]"
            >
              <span>
                Let&apos;s work <span className="italic text-neutral-300 transition-colors group-hover:text-black">together</span>
              </span>
              <ArrowUpRight className="h-8 w-8 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 md:h-14 md:w-14" strokeWidth={1} />
            </Link>
          </Reveal>
        )}

        <div className="flex flex-col items-center justify-between gap-6 border-t border-neutral-100 pt-10 md:flex-row">
          <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <div className="flex gap-10">
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 text-[11px] uppercase tracking-[0.3em] transition-opacity hover:opacity-50"
            >
              Instagram
            </a>
            <a
              href={contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 text-[11px] uppercase tracking-[0.3em] transition-opacity hover:opacity-50"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
