'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Eye, ArrowRight } from 'lucide-react'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false) // For initial page load trigger

  useEffect(() => {
    setIsLoaded(true) // Triggers the entrance animation
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const stats = [
    { label: 'HEIGHT', value: "6'3\" / 190.5 cm" },
    { label: 'HAIR', value: 'Black' },
    { label: 'EYES', value: 'Dark Brown' },
    { label: 'LOCATION', value: 'Philippines, Davao City' },
    { label: 'TRAVEL', value: 'Weekends' }
  ]

  // Shared animation classes
  const revealClass = (delay = "0") =>
    `transition-all duration-1000 ease-out transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    } ${delay}`

  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ${scrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
        }`}>
        <div className="max-w-screen-2xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="text-xl font-medium tracking-[0.3em] font-serif transition-opacity hover:opacity-50">
            SIMAR
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 p-2 group"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-current transition-transform duration-500 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-current transition-opacity duration-500 ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-current transition-transform duration-500 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] md:h-screen w-full bg-neutral-100 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="IMG_5512.jpeg"
            alt="Harsimar Singh Toor"
            className={`w-full h-full object-cover grayscale brightness-[0.9] object-top md:object-center transition-all duration-[2.5s] ease-out ${isLoaded ? 'scale-100 blur-0' : 'scale-110 blur-sm'
              }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        </div>

        <div className="absolute bottom-12 left-0 w-full px-6">
          <div className="max-w-screen-2xl mx-auto">
            <h1 className={`text-5xl md:text-[4vw] font-light leading-[0.9] tracking-tighter text-white font-serif mb-6 ${revealClass('delay-300')}`}>
              HARSIMAR <br className="md:hidden" /> SINGH TOOR
            </h1>
            <div className={`flex flex-wrap items-center gap-4 text-xs md:text-sm tracking-[0.2em] text-gray-200 uppercase ${revealClass('delay-500')}`}>
              <span>Pure Indian</span>
              <span className="w-1 h-1 bg-white rounded-full"></span>
              <span>19 Years Old</span>
              <span className="w-1 h-1 bg-white rounded-full"></span>
              <span>Model</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Reveal */}
      <section className="border-y border-gray-100 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <div className={`flex overflow-x-auto no-scrollbar py-10 px-6 divide-x divide-gray-100 ${revealClass('delay-700')}`}>
            {stats.map((stat, i) => (
              <div key={i} className="flex-none px-8 first:pl-0 last:pr-0 min-w-[160px] group">
                <p className="text-[10px] tracking-[0.3em] text-gray-400 mb-2 uppercase group-hover:text-black transition-colors">{stat.label}</p>
                <p className="text-lg font-light tracking-tight">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Reveal */}
      <section className="max-w-screen-2xl mx-auto px-6 py-24 md:py-40">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 overflow-hidden">
          <h2 className={`text-4xl md:text-7xl font-serif font-light leading-none transition-all duration-1000 delay-200 ${isLoaded ? 'translate-y-0' : 'translate-y-full'}`}>
            Selected <br />Portfolio
          </h2>-
          <Link href="/exp" className="group flex items-center gap-2 text-sm tracking-widest uppercase border-b border-black pb-1">
            View All Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
          <div className={`md:col-span-8 aspect-[4/5] overflow-hidden bg-gray-100 ${revealClass('delay-300')}`}>
            <img src="IMG_5785.jpeg" alt="Editorial" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0" />
          </div>
          <div className={`md:col-span-4 aspect-[3/4] md:mt-24 overflow-hidden bg-gray-100 ${revealClass('delay-500')}`}>
            <img src="IMG_5725.jpeg" alt="Editorial" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0" />
          </div>
          <div className={`md:col-span-4 aspect-[1/1.5] md:mt-5 overflow-hidden bg-gray-100 ${revealClass('delay-500')}`}>
            <img src="IMG_3491 (1).jpg" alt="Editorial" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0" />

          </div>
          <div className={`md:col-span-4 aspect-[1/1.5] md:mt-5 overflow-hidden bg-gray-100 ${revealClass('delay-500')}`}>
            <img src="IMG_3490.jpg" alt="Editorial" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0" />

          </div>
          <div className={`md:col-span-4 aspect-[1/1.5] md:mt-5 overflow-hidden bg-gray-100 ${revealClass('delay-500')}`}>
            <img src="IMG_9999.jpg" alt="Editorial" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0" />
          </div>

        </div>
      </section>

      {/* Brand Partners Reveal */}
      <section className="bg-black text-white py-50 md:py-20">
        <div className="max-w-screen-2xl mx-auto px-6">
          <p className="text-center text-base tracking-[0.5em] text-gray-500 mb-12 uppercase">Industry Partnerships</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-px md:bg-white/10">
            {['GCash', 'Lacoste', 'Kadayawan'].map((brand, i) => (
              <div key={brand} className={`bg-black py-10 md:p-12 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} delay-[${i * 200}ms]`}>
                <h3 className="text-sm tracking-widest text-gray-500 mb-6 uppercase">
                  {i === 0 ? 'Key Brand' : i === 1 ? 'Fashion' : 'Runway'}
                </h3>
                <p className="text-5xl font-serif mb-2">{brand}</p>
                <p className="text-gray-400 font-light">{i === 0 ? 'Brand Ambassador · 2025' : i === 1 ? 'Editorial Campaign' : 'Featured Model'}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-gray-100">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[13px] tracking-[0.3em] text-gray-400 uppercase">© 2026 Harsimar Singh Toor</p>
          <div className="flex gap-8">
            <a href="#" className="text-[14px] tracking-[0.3em] hover:text-black transition-colors">INSTAGRAM</a>
            <a href="#" className="text-[14px] tracking-[0.3em] hover:text-black transition-colors">BOOKING</a>
          </div>
        </div>
      </footer>

      {/* Navigation Overlay */}
      {/* Navigation Overlay */}
      <div className={`fixed inset-0 bg-white z-[60] transition-transform duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] ${menuOpen ? 'translate-y-0' : 'translate-y-full'}`}>
        <button onClick={() => setMenuOpen(false)} className="absolute top-8 right-6 p-2 group transition-transform hover:rotate-90">
          <X size={32} />
        </button>
        <div className="h-full flex flex-col justify-center px-12 space-y-8">
          {['Home', 'Experience', 'Contact'].map((item, i) => (
            <Link
              key={item}
              /* Logic: Home -> /, Experience -> /exp, Contact -> /contact */
              href={
                item === 'Home' ? '/' :
                  item === 'Experience' ? '/exp' :
                    `/${item.toLowerCase()}`
              }
              onClick={() => setMenuOpen(false)}
              className={`text-6xl md:text-8xl font-serif font-light hover:italic transition-all inline-block hover:pl-8 duration-500 ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}