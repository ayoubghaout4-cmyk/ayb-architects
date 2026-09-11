import { useTranslation } from 'react-i18next'

import Reveal from '../components/Reveal'
import { profile } from '../data/projects'

import './about.css'

export default function About() {
  const { t } = useTranslation()

  const educationKeys = [
    'master',
    'bachelor',
    'russianPrep',
    'baccalaureate',
  ]

  const languageKeys = {
    Arabic: 'arabic',
    French: 'french',
    English: 'english',
    Russian: 'russian',
    Spanish: 'spanish',
  }

  const skillKeys = {
    'Architectural Design': 'architecturalDesign',
    'Concept Development': 'conceptDevelopment',
    'BIM Modeling': 'bim',
    '3D Visualization': 'visualization',
    'Presentation Design': 'presentation',
    'Team Collaboration': 'collaboration',
    'Problem Solving': 'problemSolving',
  }

  return (
    <main className="about-page">

      {/* =====================================================
          HERO
          ===================================================== */}

      <header className="container about-hero">
        <span className="label">
          {t('about.profile')}
        </span>

        <h1 className="display-1">
          {profile.name}
        </h1>

        <span className="label-strong">
          <span dir="ltr">{profile.age}</span>
          {' — '}
          {t('about.role')}
          {' — '}
          {t('about.location')}
        </span>
      </header>


      {/* =====================================================
          BIO
          ===================================================== */}

      <section className="section section--tight about-bio">
        <div className="container split">

          <div className="about-hero__portrait">
            <img
              src={profile.portrait}
              alt={profile.name}
              loading="lazy"
            />
          </div>

          <Reveal variant="rise">
            <p className="body-lg">
              {t('about.bio')}
            </p>
          </Reveal>

        </div>
      </section>


      {/* =====================================================
          EDUCATION
          ===================================================== */}

      <section className="section section--tight">
        <div className="container split">

          <span className="label">
            {t('about.education')}
          </span>

          <div className="about-list">

            {profile.education.map((education, index) => {
              const educationKey = educationKeys[index]

              return (
                <div
                  className="about-list__row"
                  key={education.degree + education.years}
                >
                  <div>

                    <p className="display-3 about-list__title">
                      {t(
                        `about.educationItems.${educationKey}.degree`
                      )}
                    </p>

                    <p className="body-md">
                      {t(
                        `about.educationItems.${educationKey}.school`
                      )}
                    </p>

                  </div>

                  <span
                    className="figure about-list__years"
                    dir="ltr"
                  >
                    {education.years}
                  </span>

                </div>
              )
            })}

          </div>
        </div>
      </section>


      {/* =====================================================
          SOFTWARE
          ===================================================== */}

      <section className="section section--tight">
        <div className="container split">

          <span className="label">
            {t('about.software')}
          </span>

          <ul className="chip-list">

            {profile.software.map((software) => (
              <li
                key={software}
                className="chip-list__item"
                dir="ltr"
              >
                {software}
              </li>
            ))}

          </ul>
        </div>
      </section>


      {/* =====================================================
          LANGUAGES
          ===================================================== */}

      <section className="section section--tight">
        <div className="container split">

          <span className="label">
            {t('about.languages')}
          </span>

          <ul className="chip-list">

            {profile.languages.map((language) => {
              const languageKey = languageKeys[language]

              return (
                <li
                  key={language}
                  className="chip-list__item"
                >
                  {languageKey
                    ? t(
                        `about.languageItems.${languageKey}`
                      )
                    : language}
                </li>
              )
            })}

          </ul>
        </div>
      </section>


      {/* =====================================================
          SKILLS
          ===================================================== */}

      <section className="section section--tight">
        <div className="container split">

          <span className="label">
            {t('about.skills')}
          </span>

          <ul className="chip-list">

            {profile.skills.map((skill) => {
              const skillKey = skillKeys[skill]

              return (
                <li
                  key={skill}
                  className="chip-list__item"
                >
                  {skillKey
                    ? t(
                        `about.skillItems.${skillKey}`
                      )
                    : skill}
                </li>
              )
            })}

          </ul>
        </div>
      </section>


      {/* =====================================================
          CONTACT
          ===================================================== */}

      <section className="section section--tight about-contact-strip">
        <div className="container split">

          <span className="label">
            {t('about.contact')}
          </span>

          <div className="about-contact-strip__row">

            <a
              href={`mailto:${profile.email}`}
              data-cursor="link"
              className="text-link"
              dir="ltr"
            >
              {profile.email}
            </a>

            <a
              href={`tel:${profile.phone.replace(/\s/g, '')}`}
              data-cursor="link"
              className="text-link"
              dir="ltr"
            >
              {profile.phone}
            </a>

          </div>
        </div>
      </section>

    </main>
  )
}