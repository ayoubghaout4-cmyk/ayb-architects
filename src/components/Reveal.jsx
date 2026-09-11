import { useEffect, useRef, useState } from 'react'

/**
 * Wraps any element and adds an `is-in` class once it enters the viewport.
 * The visual treatment (mask reveal, slide, scale) is defined in CSS per
 * variant, so this stays a single lightweight primitive used everywhere.
 */
export default function Reveal({
  as: Tag = 'div',
  variant = 'mask', // mask | rise | scale | slide-left | slide-right
  delay = 0,
  className = '',
  children,
  ...rest
}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${variant} ${inView ? 'is-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
