'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, X } from 'lucide-react'

// Intersection Observer Hook for the "Scroll to Color" effect
function useElementOnScreen(options) {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting)
    }, options)
    if (containerRef.current) observer.observe(containerRef.current)
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current)
    }
  }, [containerRef, options])

  return [containerRef, isVisible]
}

// Reusable Image Component with Reveal Effect
const PortfolioImage = ({ src, alt, className = "", delay = "0" }) => {
  const [ref, isVisible] = useElementOnScreen({ threshold: 0.4 })
  return (
    <div
      ref={ref}
      className={`relative overflow-hidden bg-neutral-100 transition-all duration-[1.5s] ease-out ${className} 
      ${isVisible ? 'grayscale-0 scale-[1.02]' : 'grayscale scale-100'}`}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  )
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const stats = [
    { label: 'HEIGHT', value: "6'3\" / 190 cm" },
    { label: 'CHEST / WAIST', value: '38" / 30"' }, // Added 6th stat for symmetry
    { label: 'HAIR', value: 'Black' },
    { label: 'EYES', value: 'Dark Brown' },
    { label: 'LOCATION', value: 'Davao, PH' },
    { label: 'TRAVEL', value: 'Worldwide' }
  ]
  const partners = [
    { name: 'GCash', role: 'Ambassador', year: '2025' },
    { name: 'Lacoste', role: 'Fashion', year: '2026' },
    { name: 'Champion', role: 'Editorial', year: '2026' },
    { name: 'Kadayawan', role: 'Runway', year: '2025' },
  ]

  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white overflow-x-hidden">

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'bg-white/70 backdrop-blur-lg py-3 shadow-sm' : 'bg-transparent py-6'
        }`}>
        <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="text-lg font-medium tracking-[0.4em] font-serif uppercase">
            SIMAR
          </Link>
          <button onClick={() => setMenuOpen(true)} className="flex flex-col gap-1.5 p-2 group">
            <span className="block h-[1px] w-6 bg-current"></span>
            <span className="block h-[1px] w-4 bg-current ml-auto transition-all group-hover:w-6"></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[85vh] md:h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="IMG_5512.jpeg"
            alt="Harsimar Singh Toor"
            className={`w-full h-full object-cover object-top md:object-center transition-all duration-[3s] ${isLoaded ? 'scale-100' : 'scale-110'
              }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

        <div className="absolute bottom-10 left-0 w-full px-6">
          <div className="max-w-screen-xl mx-auto">
            <h1 className={`text-4xl md:text-[5vw] font-serif text-white leading-none mb-4 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              HARSIMAR <br /> SINGH TOOR
            </h1>
            <div className={`flex items-center gap-3 text-[12px] tracking-[0.2em] text-neutral-300 uppercase ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <span>Pure Indian</span>
              <span className="w-1 h-1 bg-white rounded-full"></span>
              <span>19 Years</span>
              <span className="w-1 h-1 bg-white rounded-full"></span>
              <span>Model</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Balanced 6-item Grid */}
      <section className="bg-white py-12 border-b border-neutral-100">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-4">
            {stats.map((stat, i) => (
              <div key={i} className="group flex flex-col items-center md:items-start text-center md:text-left">
                <p className="text-[9px] tracking-[0.3em] text-neutral-400 mb-2 uppercase font-medium">
                  {stat.label}
                </p>
                <p className="text-base font-light text-neutral-900 tracking-tight">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section - Refined for Laptop Aspect Ratios */}
      <section className="max-w-screen-xl mx-auto px-6 py-20 md:py-32">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl md:text-6xl font-serif leading-none">Selected<br />Works</h2>
          <Link href="/exp" className="group flex items-center gap-2 text-[10px] tracking-widest uppercase border-b border-black pb-1">
            Explore <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Changed items-start to prevent vertical stretching on laptops */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-8 items-start">

          {/* Large Lead Image: Optimized ratio for laptop to prevent cropping */}
          <PortfolioImage
            src="IMG_5785.jpeg"
            alt="Editorial"
            className="col-span-2 md:col-span-8 aspect-[4/5] md:aspect-[9/11]"
          />

          {/* Side Image: Taller portrait for laptop */}
          <PortfolioImage
            src="IMG_5725.jpeg"
            alt="Editorial"
            className="col-span-2 md:col-span-4 aspect-[3/4] md:aspect-[4/6]"
          />

          {/* Bottom Row: Asymmetric staggered heights */}
          <PortfolioImage
            src="IMG_3491 (1).jpg"
            alt="Editorial"
            className="col-span-1 md:col-span-4 aspect-[2/3]"
          />

          <PortfolioImage
            src="IMG_3490.jpg"
            alt="Editorial"
            className="col-span-1 md:col-span-4 aspect-[2/3] md:mt-24"
          />

          <PortfolioImage
            src="IMG_3489.jpg"
            alt="Editorial"
            className="col-span-2 md:col-span-4 aspect-[4/5] md:aspect-square"
          />
        </div>
      </section>

      {/* Industry Partnerships - Compact for Mobile */}
      <section className="bg-neutral-950 text-white py-20">
        <div className="max-w-screen-xl mx-auto px-6">
          <p className="text-[10px] tracking-[0.5em] text-neutral-500 mb-12 uppercase text-center md:text-left">Industry Partnerships</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12">
            {partners.map((brand) => (
              <div key={brand.name} className="flex flex-col">
                <span className="text-[9px] text-neutral-500 tracking-tighter mb-2 italic">{brand.year}</span>
                <h3 className="text-2xl md:text-3xl font-serif mb-1">{brand.name}</h3>
                <p className="text-[10px] text-neutral-400 uppercase tracking-widest">{brand.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Optimized Height */}
      <footer className="py-12 px-6 bg-white border-t border-neutral-100">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-[10px] tracking-[0.2em] text-neutral-400 uppercase">
            © 2026 Harsimar Singh Toor
          </p>

          {/* Social Links */}
          <div className="flex gap-10">
            <a
              href="https://instagram.com/cmrtoor/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] tracking-[0.3em] uppercase hover:opacity-50 transition-opacity"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/harsimar.singh.395454/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] tracking-[0.3em] uppercase hover:opacity-50 transition-opacity"
            >
              Facebook
            </a>
          </div>
        </div>
      </footer>

      {/* Navigation Overlay */}
      {/* Navigation Overlay */}
      <div className={`fixed inset-0 bg-white z-[100] transition-all duration-700 ease-[cubic-bezier(0.8,0,0.2,1)] ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <button onClick={() => setMenuOpen(false)} className="absolute top-8 right-6 p-2">
          <X size={30} strokeWidth={1} />
        </button>

        <div className="h-full flex flex-col justify-center px-10 space-y-6">
          {[
            { name: 'Home', path: '/' },
            { name: 'Experience', path: '/exp' },
            { name: 'Contact', path: '/contact' } // Points exactly to your contact page
          ].map((item, i) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setMenuOpen(false)}
              className={`text-5xl md:text-8xl font-serif font-light hover:italic transition-all duration-500 block ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

    </div>
  )
}