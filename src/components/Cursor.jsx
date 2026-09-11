import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import './cursor.css'

const isCoarsePointer = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(pointer: coarse)').matches

export default function Cursor() {
  const { t } = useTranslation()

  const wrapRef = useRef(null)
  const coordRef = useRef(null)

  const [enabled, setEnabled] = useState(false)
  const [mode, setMode] = useState('default')

  const pos = useRef({
    x: 0,
    y: 0,
  })

  const target = useRef({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    if (isCoarsePointer()) return undefined

    setEnabled(true)

    document.documentElement.classList.add(
      'no-cursor'
    )

    let frame

    const loop = () => {
      /* MUCH FASTER CURSOR RESPONSE */

      pos.current.x +=
        (target.current.x - pos.current.x) * 0.7

      pos.current.y +=
        (target.current.y - pos.current.y) * 0.7

      if (wrapRef.current) {
        wrapRef.current.style.transform =
          `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`
      }

      if (coordRef.current) {
        const x = String(
          Math.round(pos.current.x)
        ).padStart(3, '0')

        const y = String(
          Math.round(pos.current.y)
        ).padStart(3, '0')

        coordRef.current.textContent =
          `X ${x}  Y ${y}`
      }

      frame = requestAnimationFrame(loop)
    }

    frame = requestAnimationFrame(loop)

    const handleMove = (e) => {
      target.current.x = e.clientX
      target.current.y = e.clientY
    }

    const handleOver = (e) => {
      const el = e.target.closest(
        '[data-cursor]'
      )

      setMode(
        el
          ? el.getAttribute('data-cursor')
          : 'default'
      )
    }

    window.addEventListener(
      'mousemove',
      handleMove,
      {
        passive: true,
      }
    )

    window.addEventListener(
      'mouseover',
      handleOver,
      {
        passive: true,
      }
    )

    return () => {
      cancelAnimationFrame(frame)

      window.removeEventListener(
        'mousemove',
        handleMove
      )

      window.removeEventListener(
        'mouseover',
        handleOver
      )

      document.documentElement.classList.remove(
        'no-cursor'
      )
    }
  }, [])

  if (!enabled) return null

  return (
    <div
      ref={wrapRef}
      className={`ayb-cursor ayb-cursor--${mode}`}
      aria-hidden="true"
    >
      <span className="ayb-cursor__line ayb-cursor__line--h" />

      <span className="ayb-cursor__line ayb-cursor__line--v" />

      <span className="ayb-cursor__dot" />

      <span
        ref={coordRef}
        className="ayb-cursor__coord"
        dir="ltr"
      >
        X 000 Y 000
      </span>

      <span
        className="ayb-cursor__tag"
        dir="ltr"
      >
        {mode === 'project' &&
          t('cursor.view')}

        {mode === 'image' &&
          t('cursor.figure')}

        {mode === 'link' && '→'}
      </span>
    </div>
  )
}