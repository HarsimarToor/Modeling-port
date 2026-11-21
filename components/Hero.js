'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { profile } from '../data/portfolio'

// Homepage hero. The load-in animation is the original one:
// the photo settles from 110% -> 100% over 3s, the name slides up and the
// tagline fades in.
export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const [first, ...rest] = profile.name.toUpperCase().split(' ')

  return (
    <section className="relative h-[88svh] min-h-[540px] w-full overflow-hidden md:h-screen">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt={profile.name}
          fill
          priority
          sizes="100vw"
          className={`object-cover object-[62%_top] transition-all duration-[3s] md:object-center ${
            isLoaded ? 'scale-100' : 'scale-110'
          }`}
        />
        {/* bottom gradient for the name, soft top gradient so the menu stays readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/30 to-transparent" />
      </div>

      <div className="absolute bottom-10 left-0 w-full px-6">
        <div className="mx-auto max-w-screen-xl">
          <h1
            className={`mb-4 font-serif text-[clamp(2.75rem,13vw,4.5rem)] leading-[0.95] text-white transition-all duration-1000 md:text-[5vw] md:leading-none ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            {first} <br /> {rest.join(' ')}
          </h1>
          <div
            className={`flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-neutral-200 transition-opacity duration-1000 delay-500 md:text-[12px] ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {profile.tagline.map((item, i) => (
              <span key={item} className="flex items-center gap-3">
                {i > 0 && <span className="h-1 w-1 rounded-full bg-white" />}
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* scroll cue (desktop) */}
      <div
        className={`absolute bottom-10 right-8 hidden items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/80 transition-opacity delay-1000 duration-1000 md:flex ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span>Scroll</span>
        <span className="relative block h-12 w-px overflow-hidden bg-white/25">
          <span className="scroll-line absolute inset-0 bg-white" />
        </span>
      </div>
    </section>
  )
}
