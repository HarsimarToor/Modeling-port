import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SiteHeader from '../components/SiteHeader'
import Hero from '../components/Hero'
import Reveal from '../components/Reveal'
import WorksGrid from '../components/WorksGrid'
import Footer from '../components/Footer'
import { stats, partners, works, HOME_WORKS_LIMIT } from '../data/portfolio'

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-black selection:bg-black selection:text-white">
      <SiteHeader overHero />

      <main>
        <Hero />

        {/* Stats */}
        <section className="border-b border-neutral-100 bg-white py-12 md:py-14">
          <div className="mx-auto max-w-screen-xl px-6">
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 80} className="flex flex-col items-center text-center md:items-start md:text-left">
                  <p className="mb-2 text-[9px] font-medium uppercase tracking-[0.3em] text-neutral-400">{stat.label}</p>
                  <p className="text-base font-light tracking-tight text-neutral-900">{stat.value}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Works */}
        <section id="works" className="mx-auto max-w-screen-xl px-6 py-20 md:py-32">
          <Reveal className="mb-12 flex items-end justify-between md:mb-16">
            <h2 className="font-serif text-4xl leading-none md:text-6xl">
              Selected
              <br />
              Works
            </h2>
            <Link
              href="/exp"
              className="group flex items-center gap-2 border-b border-black pb-1 text-[10px] uppercase tracking-widest"
            >
              Explore <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <WorksGrid works={works.slice(0, HOME_WORKS_LIMIT)} />
        </section>

        {/* Industry Partnerships */}
        <section className="bg-neutral-950 py-20 text-white md:py-28">
          <div className="mx-auto max-w-screen-xl px-6">
            <Reveal>
              <p className="mb-12 text-center text-[10px] uppercase tracking-[0.5em] text-neutral-500 md:mb-16 md:text-left">
                Industry Partnerships
              </p>
            </Reveal>
            <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-4 md:gap-x-8">
              {partners.map((brand, i) => (
                <Reveal key={brand.name} delay={i * 100} className="flex flex-col border-t border-white/10 pt-5">
                  <span className="mb-2 text-[9px] italic tracking-tighter text-neutral-500">{brand.year}</span>
                  <h3 className="mb-1 font-serif text-2xl md:text-3xl">{brand.name}</h3>
                  <p className="text-[10px] uppercase tracking-widest text-neutral-400">{brand.role}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
