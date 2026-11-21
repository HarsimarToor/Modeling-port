'use client'

import { useCallback, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { isVideo } from '../data/portfolio'

/**
 * Full-screen photo viewer.
 *  - phones: swipe left/right, tap arrows, tap X
 *  - desktop: arrow keys, Esc to close
 * items: [{ src, alt, poster? }]   aside: optional details panel (right side / below on phones)
 * caption: optional small text over the bottom of the photo
 */
export default function GalleryViewer({ items, index, onIndexChange, onClose, aside = null, caption = null, label = 'Photo viewer' }) {
  const count = items.length
  const touch = useRef(null)
  const closeRef = useRef(null)

  const go = useCallback(
    (step) => onIndexChange((index + step + count) % count),
    [index, count, onIndexChange]
  )

  // Lock page scroll behind the viewer and focus the close button
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = prev
    }
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight' && count > 1) go(1)
      else if (e.key === 'ArrowLeft' && count > 1) go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go, onClose, count])

  const onTouchStart = (e) => {
    const t = e.touches[0]
    touch.current = { x: t.clientX, y: t.clientY }
  }
  const onTouchEnd = (e) => {
    if (!touch.current || count < 2) return
    const t = e.changedTouches[0]
    const dx = t.clientX - touch.current.x
    const dy = t.clientY - touch.current.y
    touch.current = null
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) go(dx < 0 ? 1 : -1)
  }

  const item = items[index]
  const arrowBtn =
    'absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white/80 backdrop-blur-sm transition hover:bg-black/50 hover:text-white md:h-14 md:w-14 md:bg-transparent md:text-white/40'

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={label}
      className={`fixed inset-0 z-[80] flex flex-col overscroll-contain md:flex-row ${
        aside ? 'overflow-y-auto bg-white md:overflow-hidden' : 'bg-neutral-950'
      }`}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close"
        className={`fixed right-4 z-[90] flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm ${
          aside ? 'md:bg-transparent md:text-black md:backdrop-blur-none' : 'md:bg-white/10'
        }`}
        style={{ top: 'max(env(safe-area-inset-top), 1rem)' }}
      >
        <X size={22} />
      </button>

      {/* photo stage */}
      <div
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        className={`relative shrink-0 select-none bg-neutral-950 [touch-action:pan-y] md:flex-1 ${
          aside ? 'h-[68svh] md:h-full' : 'h-full'
        }`}
      >
        {isVideo(item.src) ? (
          <video
            key={item.src}
            src={item.src}
            poster={item.poster}
            autoPlay
            muted
            loop
            playsInline
            controls
            className="gv-fade absolute inset-0 h-full w-full object-contain"
          />
        ) : (
          <Image
            key={item.src}
            src={item.src}
            alt={item.alt || ''}
            fill
            priority
            sizes="(min-width: 768px) 70vw, 100vw"
            className="gv-fade object-contain p-2 md:p-6"
          />
        )}

        {count > 1 && (
          <>
            <button type="button" onClick={() => go(-1)} aria-label="Previous photo" className={`${arrowBtn} left-3`}>
              <ChevronLeft size={28} strokeWidth={1.5} />
            </button>
            <button type="button" onClick={() => go(1)} aria-label="Next photo" className={`${arrowBtn} right-3`}>
              <ChevronRight size={28} strokeWidth={1.5} />
            </button>
            <p
              className="absolute left-5 text-[11px] tracking-[0.3em] text-white/70"
              style={{ top: 'max(env(safe-area-inset-top), 1rem)', paddingTop: '0.9rem' }}
            >
              {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
            </p>
          </>
        )}

        {caption && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-5 pb-[max(env(safe-area-inset-bottom),1.25rem)] pt-16">
            {caption}
          </div>
        )}
      </div>

      {aside && (
        <div className="flex bg-white p-8 pb-[max(env(safe-area-inset-bottom),2.5rem)] md:w-[450px] md:flex-col md:justify-center md:overflow-y-auto md:p-14">
          {aside}
        </div>
      )}
    </div>
  )
}
