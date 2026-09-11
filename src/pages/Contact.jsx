import { useTranslation } from 'react-i18next'

import Reveal from '../components/Reveal'
import { profile } from '../data/projects'

import './contact.css'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <main className="contact-page">

      <div className="container contact-page__inner">

        <span className="label">
          {t('contactPage.label')}
        </span>


        <Reveal
          variant="rise"
          as="h1"
          className="display-1 contact-page__title"
        >
          {t('contactPage.buildLine1')}
          <br />
          {t('contactPage.buildLine2')}
        </Reveal>


        <div className="contact-page__grid">

          {/* EMAIL */}

          <Reveal
            variant="rise"
            delay={100}
            className="contact-page__block"
          >
            <span className="label">
              {t('contactPage.email')}
            </span>

            <a
              href={`mailto:${profile.email}`}
              className="contact-page__value"
              data-cursor="link"
              dir="ltr"
            >
              {profile.email}
            </a>
          </Reveal>


          {/* PHONE */}

          <Reveal
            variant="rise"
            delay={160}
            className="contact-page__block"
          >
            <span className="label">
              {t('contactPage.phone')}
            </span>

            <a
              href={`tel:${profile.phone.replace(/\s/g, '')}`}
              className="contact-page__value"
              data-cursor="link"
              dir="ltr"
            >
              {profile.phone}
            </a>
          </Reveal>


          {/* LOCATION */}

          <Reveal
            variant="rise"
            delay={220}
            className="contact-page__block"
          >
            <span className="label">
              {t('contactPage.basedIn')}
            </span>

            <p className="contact-page__value contact-page__value--static">
              {t('contactPage.location')}
            </p>
          </Reveal>

        </div>

      </div>

    </main>
  )
}