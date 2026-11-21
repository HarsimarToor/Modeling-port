'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useInView } from './useInView'
import GalleryViewer from './GalleryViewer'
import { asset, isVideo } from '../data/portfolio'

function ProjectCard({ project, index, onOpen }) {
  const [ref, inView] = useInView({ threshold: 0.3 })
  const cover = asset(project.cover)

  return (
    <button
      type="button"
      ref={ref}
      onClick={() => onOpen(project)}
      aria-label={`View ${project.client}`}
      className="group block w-full text-left"
    >
      <div
        className={`relative mb-5 aspect-[4/5] overflow-hidden bg-neutral-100 transition-[filter] duration-[1.5s] ease-out md:mb-6 md:aspect-[3/4] ${
          inView ? 'grayscale-0' : 'grayscale'
        }`}
      >
        {isVideo(project.cover) ? (
          <video
            src={cover}
            poster={project.poster ? asset(project.poster) : undefined}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className={`h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.06] ${
              inView ? 'scale-[1.03]' : 'scale-100'
            }`}
          />
        ) : (
          <Image
            src={cover}
            alt={project.client}
            fill
            priority={index < 2}
            sizes="(min-width: 768px) 50vw, 100vw"
            className={`object-cover object-top transition-transform duration-[1.5s] ease-out group-hover:scale-[1.06] ${
              inView ? 'scale-[1.03]' : 'scale-100'
            }`}
          />
        )}
        <div className="absolute bottom-4 right-4 z-10 bg-white px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] shadow-sm">
          View Details
        </div>
      </div>

      <div
        className={`space-y-1 transition-all delay-100 duration-1000 ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <span className="block font-serif text-2xl font-light tracking-[0.05em] md:text-3xl">{project.client}</span>
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-neutral-400">
          <span>{project.type}</span>
          <span>{project.year}</span>
        </div>
      </div>
    </button>
  )
}

export default function ProjectsGrid({ projects }) {
  const [selected, setSelected] = useState(null)
  const [index, setIndex] = useState(0)

  const open = (project) => {
    setSelected(project)
    setIndex(0)
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-y-14 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} onOpen={open} />
        ))}
      </div>

      {selected && (
        <GalleryViewer
          label={`${selected.client} gallery`}
          items={selected.gallery.map((g) => ({
            src: asset(g),
            alt: selected.client,
            poster: selected.poster ? asset(selected.poster) : undefined,
          }))}
          index={index}
          onIndexChange={setIndex}
          onClose={() => setSelected(null)}
          aside={
            <div className="w-full space-y-8">
              <div>
                <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-neutral-400">{selected.type}</p>
                <h2 className="mb-4 font-serif text-4xl">{selected.client}</h2>
                <p className="text-sm leading-relaxed text-neutral-600">{selected.description}</p>
              </div>
              <div className="grid grid-cols-2 gap-8 border-t border-neutral-100 pt-8">
                {selected.location && (
                  <div>
                    <p className="mb-1 text-[9px] uppercase tracking-[0.2em] text-neutral-400">Location</p>
                    <p className="text-xs uppercase tracking-wider">{selected.location}</p>
                  </div>
                )}
                <div>
                  <p className="mb-1 text-[9px] uppercase tracking-[0.2em] text-neutral-400">Date</p>
                  <p className="text-xs uppercase tracking-wider">{selected.date}</p>
                </div>
              </div>
            </div>
          }
        />
      )}
    </>
  )
}
