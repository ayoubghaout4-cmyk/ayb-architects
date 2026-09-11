import { useEffect, useRef } from 'react'

export default function ParallaxImage({
  src,
  alt = '',
  strength = 40,
  className = '',
  cursor = 'image',
}) {
  const wrapRef = useRef(null)
  const imgRef = useRef(null)
  const active = useRef(false)

  useEffect(() => {
    const wrap = wrapRef.current
    const img = imgRef.current

    if (!wrap || !img) return undefined

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReduced) return undefined

    let raf

    const update = () => {
      const rect = wrap.getBoundingClientRect()
      const vh = window.innerHeight || 1

      const progress =
        (rect.top + rect.height / 2 - vh / 2) / vh

      const offset =
        Math.max(-1, Math.min(1, progress)) * strength

      img.style.transform =
        `translate3d(0, ${offset}px, 0) scale(1)`

      raf = requestAnimationFrame(update)
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !active.current) {
          active.current = true
          raf = requestAnimationFrame(update)
        } else if (!entry.isIntersecting && active.current) {
          active.current = false
          cancelAnimationFrame(raf)
        }
      },
      { threshold: 0 }
    )

    io.observe(wrap)

    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [strength])

  return (
    <div
      ref={wrapRef}
      className={`parallax-img ${className}`}
      data-cursor={cursor}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
      />
    </div>
  )
}