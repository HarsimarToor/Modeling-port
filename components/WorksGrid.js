'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useInView } from './useInView'
import GalleryViewer from './GalleryViewer'
import { asset } from '../data/portfolio'

// Full class names are written out so Tailwind can find them.
const RATIOS = {
  portrait: 'aspect-[4/5]',
  tall: 'aspect-[2/3]',
  square: 'aspect-square',
  landscape: 'aspect-[4/3]',
}

function WorkTile({ work, index, featured, onOpen }) {
  // Original "scroll to colour" effect: grey until the photo is 40% on screen
  const [ref, inView] = useInView({ threshold: 0.4 })
  const label = work.client ? `${work.client}${work.year ? `, ${work.year}` : ''}` : work.alt || 'Photo'

  return (
    <button
      type="button"
      onClick={() => onOpen(index)}
      aria-label={`Open photo: ${label}`}
      className={`group block w-full text-left ${featured ? 'col-span-2 md:col-span-1' : ''} md:[&:nth-child(3n+2)]:translate-y-12`}
    >
      <div
        ref={ref}
        className={`relative overflow-hidden bg-neutral-100 transition-[filter] duration-[1.5s] ease-out ${
          RATIOS[work.ratio] || RATIOS.portrait
        } ${inView ? 'grayscale-0' : 'grayscale'}`}
      >
        <Image
          src={asset(work.src)}
          alt={work.alt || work.client || 'Portfolio photo'}
          fill
          sizes={featured ? '(min-width: 768px) 33vw, 100vw' : '(min-width: 1280px) 400px, (min-width: 768px) 33vw, 50vw'}
          priority={index < 2}
          className={`object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.06] ${
            inView ? 'scale-[1.03]' : 'scale-100'
          }`}
          style={{ objectPosition: work.focus || '50% 25%' }}
        />
      </div>
      {work.client && (
        <div className="mt-3 flex items-baseline justify-between gap-3">
          <span className="font-serif text-lg leading-tight md:text-xl">{work.client}</span>
          {work.year && <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">{work.year}</span>}
        </div>
      )}
    </button>
  )
}

export default function WorksGrid({ works }) {
  const [open, setOpen] = useState(null)

  return (
    <>
      <div className="grid grid-cols-2 items-start gap-x-3 gap-y-6 md:grid-cols-3 md:gap-x-8 md:gap-y-14 md:pb-12">
        {works.map((work, i) => (
          <WorkTile key={`${work.src}-${i}`} work={work} index={i} featured={i === 0} onOpen={setOpen} />
        ))}
      </div>

      {open !== null && (
        <GalleryViewer
          label="Selected works"
          items={works.map((w) => ({ src: asset(w.src), alt: w.alt || w.client || '' }))}
          index={open}
          onIndexChange={setOpen}
          onClose={() => setOpen(null)}
          caption={
            works[open].client && (
              <p className="font-serif text-2xl text-white">
                {works[open].client}
                {works[open].year && (
                  <span className="ml-3 font-sans text-[10px] uppercase tracking-[0.25em] text-white/70">{works[open].year}</span>
                )}
              </p>
            )
          }
        />
      )}
    </>
  )
}
