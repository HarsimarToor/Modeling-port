'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Tells you when an element is on screen.
 * once=false -> flips back and forth as you scroll (used for the grey -> colour photo effect)
 * once=true  -> stays true after the first time it appears (used for fade-ins)
 */
export function useInView({ threshold = 0.3, once = false } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once])

  return [ref, inView]
}
