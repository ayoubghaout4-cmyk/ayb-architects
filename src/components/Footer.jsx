import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { profile } from '../data/projects'

import './footer.css'

export default function Footer() {
  const { t } = useTranslation()

  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">

      <div className="container">

        <hr className="hairline" />

        <div className="site-footer__grid">

          {/* ===================================== */}
          {/* STUDIO */}
          {/* ===================================== */}

          <div className="site-footer__col">

            <span className="label">
              {t('footer.studio')}
            </span>

            <p className="site-footer__big">
              AYB Architects
            </p>

            <p className="body-md">
              {t('footer.architect')}
            </p>

          </div>


          {/* ===================================== */}
          {/* CONTACT */}
          {/* ===================================== */}

          <div className="site-footer__col">

            <span className="label">
              {t('footer.contact')}
            </span>

            <a
              href={`mailto:${profile.email}`}
              className="site-footer__link"
              data-cursor="link"
              dir="ltr"
            >
              {profile.email}
            </a>

            <a
              href={`tel:${profile.phone.replace(/\s/g, '')}`}
              className="site-footer__link"
              data-cursor="link"
              dir="ltr"
            >
              {profile.phone}
            </a>

          </div>


          {/* ===================================== */}
          {/* LOCATION */}
          {/* ===================================== */}

          <div className="site-footer__col">

            <span className="label">
              {t('footer.basedIn')}
            </span>

            <p className="body-md">
              {t('footer.location')}
            </p>

            <Link
              to="/contact"
              className="site-footer__link"
              data-cursor="link"
            >
              {t('footer.getInTouch')}
            </Link>

          </div>

        </div>


        {/* ===================================== */}
        {/* BOTTOM */}
        {/* ===================================== */}

        <div className="site-footer__bottom meta-row">

          <span dir="ltr">
            © {year} AYB Architects
          </span>

          <span dir="ltr">
            AYB / 001
          </span>

        </div>

      </div>

    </footer>
  )
}