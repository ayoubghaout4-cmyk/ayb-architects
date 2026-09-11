import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './hero.css'

export default function Hero() {
  const { t } = useTranslation()

  const heroRef = useRef(null)
  const imgLayerRef = useRef(null)
  const typeLayerRef = useRef(null)
  const spotlightRef = useRef(null)

  const pointer = useRef({
    x: 0,
    y: 0,
    px: 50,
    py: 50,
    targetX: 50,
    targetY: 50,
  })

  useEffect(() => {
    const hero = heroRef.current

    if (!hero) return undefined

    let animationFrame

    const onMove = (e) => {
      const rect = hero.getBoundingClientRect()

      const localX = e.clientX - rect.left
      const localY = e.clientY - rect.top

      pointer.current.x = localX / rect.width - 0.5
      pointer.current.y = localY / rect.height - 0.5

      pointer.current.targetX = (localX / rect.width) * 100
      pointer.current.targetY = (localY / rect.height) * 100
    }

    const onEnter = () => {
      hero.classList.add('is-hovering')
    }

    const onLeave = () => {
      hero.classList.remove('is-hovering')
    }

    const render = () => {
      pointer.current.px +=
        (pointer.current.targetX - pointer.current.px) * 0.12

      pointer.current.py +=
        (pointer.current.targetY - pointer.current.py) * 0.12

      if (imgLayerRef.current) {
        imgLayerRef.current.style.transform =
          `translate3d(${pointer.current.x * -14}px, ${pointer.current.y * -10}px, 0) scale(1.06)`
      }

      if (typeLayerRef.current) {
        typeLayerRef.current.style.transform =
          `translate3d(${pointer.current.x * 16}px, ${pointer.current.y * 10}px, 0)`
      }

      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty(
          '--spot-x',
          `${pointer.current.px}%`
        )

        spotlightRef.current.style.setProperty(
          '--spot-y',
          `${pointer.current.py}%`
        )
      }

      animationFrame = requestAnimationFrame(render)
    }

    hero.addEventListener('mousemove', onMove, { passive: true })
    hero.addEventListener('mouseenter', onEnter)
    hero.addEventListener('mouseleave', onLeave)

    animationFrame = requestAnimationFrame(render)

    return () => {
      hero.removeEventListener('mousemove', onMove)
      hero.removeEventListener('mouseenter', onEnter)
      hero.removeEventListener('mouseleave', onLeave)

      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <section className="hero" ref={heroRef}>

      {/* ===================================== */}
      {/* FADED BACKGROUND IMAGE */}
      {/* ===================================== */}

      <div
        className="hero__image-layer"
        ref={imgLayerRef}
      >
        <img
          src="/images/villa-amour/ChatGPT Image Sep 5, 2026, 04_44_55 PM.png"
          alt={t('hero.imageAlt')}
          className="hero__image hero__image--base"
        />
      </div>


      {/* ===================================== */}
      {/* CURSOR SPOTLIGHT IMAGE */}
      {/* ===================================== */}

      <div
        className="hero__spotlight"
        ref={spotlightRef}
      >
        <img
          src="/images/profile/hero-collage.png"
          alt=""
          aria-hidden="true"
          className="hero__spotlight-image"
        />
      </div>


      {/* ===================================== */}
      {/* DARK / LIGHT SCRIM */}
      {/* ===================================== */}

      <div className="hero__scrim" />


      {/* ===================================== */}
      {/* HERO TEXT */}
      {/* ===================================== */}

      <div
        className="hero__type-layer"
        ref={typeLayerRef}
      >
        <div className="container hero__grid">

          <div className="hero__title-block">

            <h1 className="hero__title">

              <span className="hero__title-line">
                AYB
              </span>

              <span className="hero__title-line hero__title-line--outline">
                Architects
              </span>

            </h1>

          </div>


          <div className="hero__meta">

            <span className="label-strong">
              {t('hero.tagline')}
            </span>

            <span className="label">
              {t('hero.location')}
            </span>

          </div>

        </div>
      </div>


      {/* ===================================== */}
      {/* COORDINATES */}
      {/* ===================================== */}

      <div className="hero__coord container">
        <span className="figure"></span>
        <span className="figure"></span>
      </div>


      {/* ===================================== */}
      {/* PROJECT LINK */}
      {/* ===================================== */}

      <Link
        to="/projects"
        className="hero__scroll"
        data-cursor="link"
      >
        <span className="label"></span>
      </Link>

    </section>
  )
}