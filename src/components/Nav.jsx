import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './nav.css'

export default function Nav() {
  const [shrunk, setShrunk] = useState(false)
  const [open, setOpen] = useState(false)

  const { t, i18n } = useTranslation()

  useEffect(() => {
    const onScroll = () => setShrunk(window.scrollY > 80)

    onScroll()

    window.addEventListener('scroll', onScroll, {
      passive: true,
    })

    return () =>
      window.removeEventListener(
        'scroll',
        onScroll
      )
  }, [])

  useEffect(() => {
    const language =
      i18n.resolvedLanguage ||
      i18n.language

    const isArabic =
      language === 'ar'

    document.documentElement.lang =
      language

    document.documentElement.dir =
      isArabic ? 'rtl' : 'ltr'

    localStorage.setItem(
      'language',
      language
    )
  }, [
    i18n.language,
    i18n.resolvedLanguage,
  ])

  const changeLanguage = (
    language
  ) => {
    i18n.changeLanguage(language)

    setOpen(false)
  }

  const currentLanguage =
    i18n.resolvedLanguage ||
    i18n.language

  // =========================================================
  // ACCESSIBILITY LABELS
  // =========================================================

  const accessibilityLabels = {
    en: {
      primary: 'Primary navigation',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },

    fr: {
      primary: 'Navigation principale',
      openMenu: 'Ouvrir le menu',
      closeMenu: 'Fermer le menu',
    },

    ar: {
      primary: 'التنقل الرئيسي',
      openMenu: 'فتح القائمة',
      closeMenu: 'إغلاق القائمة',
    },
  }

  const labels =
    accessibilityLabels[
      currentLanguage
    ] ||
    accessibilityLabels.en

  return (
    <header
      className={`nav ${
        shrunk
          ? 'nav--shrunk'
          : ''
      }`}
    >
      <div className="nav__inner container">

        {/* ===================================== */}
        {/* LOGO */}
        {/* ===================================== */}

        <Link
          to="/"
          className="nav__mark"
          data-cursor="link"
          onClick={() =>
            setOpen(false)
          }
        >
          AYB
        </Link>


        {/* ===================================== */}
        {/* DESKTOP NAV */}
        {/* ===================================== */}

        <nav
          className="nav__links"
          aria-label={
            labels.primary
          }
        >
          <NavLink
            to="/projects"
            className="nav__link"
            data-cursor="link"
          >
            {t('nav.projects')}
          </NavLink>

          <NavLink
            to="/about"
            className="nav__link"
            data-cursor="link"
          >
            {t('nav.about')}
          </NavLink>

          <NavLink
            to="/contact"
            className="nav__link"
            data-cursor="link"
          >
            {t('nav.contact')}
          </NavLink>


          {/* ================================= */}
          {/* LANGUAGE SWITCHER */}
          {/* ================================= */}

          <div className="nav__languages">

            <button
              type="button"
              className={
                currentLanguage === 'en'
                  ? 'is-active'
                  : ''
              }
              onClick={() =>
                changeLanguage('en')
              }
            >
              EN
            </button>

            <button
              type="button"
              className={
                currentLanguage === 'fr'
                  ? 'is-active'
                  : ''
              }
              onClick={() =>
                changeLanguage('fr')
              }
            >
              FR
            </button>

            <button
              type="button"
              className={
                currentLanguage === 'ar'
                  ? 'is-active'
                  : ''
              }
              onClick={() =>
                changeLanguage('ar')
              }
            >
              AR
            </button>

          </div>

        </nav>


        {/* ===================================== */}
        {/* MOBILE TOGGLE */}
        {/* ===================================== */}

        <button
          type="button"
          className={`nav__toggle ${
            open
              ? 'nav__toggle--open'
              : ''
          }`}
          onClick={() =>
            setOpen((v) => !v)
          }
          aria-expanded={open}
          aria-label={
            open
              ? labels.closeMenu
              : labels.openMenu
          }
          data-cursor="link"
        >
          <span />
          <span />
        </button>

      </div>


      {/* ===================================== */}
      {/* MOBILE MENU */}
      {/* ===================================== */}

      <div
        className={`nav__mobile ${
          open
            ? 'nav__mobile--open'
            : ''
        }`}
      >
        <NavLink
          to="/projects"
          onClick={() =>
            setOpen(false)
          }
        >
          {t('nav.projects')}
        </NavLink>

        <NavLink
          to="/about"
          onClick={() =>
            setOpen(false)
          }
        >
          {t('nav.about')}
        </NavLink>

        <NavLink
          to="/contact"
          onClick={() =>
            setOpen(false)
          }
        >
          {t('nav.contact')}
        </NavLink>


        {/* ================================= */}
        {/* MOBILE LANGUAGE SWITCHER */}
        {/* ================================= */}

        <div className="nav__languages nav__languages--mobile">

          <button
            type="button"
            className={
              currentLanguage === 'en'
                ? 'is-active'
                : ''
            }
            onClick={() =>
              changeLanguage('en')
            }
          >
            EN
          </button>

          <button
            type="button"
            className={
              currentLanguage === 'fr'
                ? 'is-active'
                : ''
            }
            onClick={() =>
              changeLanguage('fr')
            }
          >
            FR
          </button>

          <button
            type="button"
            className={
              currentLanguage === 'ar'
                ? 'is-active'
                : ''
            }
            onClick={() =>
              changeLanguage('ar')
            }
          >
            AR
          </button>

        </div>


        {/* ================================= */}
        {/* LOCATION */}
        {/* ================================= */}

        <span className="nav__mobile-meta label">
          {t('nav.location')}
        </span>

      </div>

    </header>
  )
}