import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Hero from '../components/Hero'
import Reveal from '../components/Reveal'
import ProjectTeaser from '../components/ProjectTeaser'

import { profile, projects } from '../data/projects'

import './home.css'

export default function Home() {
  const { t, i18n } = useTranslation()

  const currentLanguage =
    i18n.resolvedLanguage?.split('-')[0] ||
    i18n.language?.split('-')[0] ||
    'en'

  const portfolioLabels = {
    en: 'Portfolio PDF ↗',
    fr: 'Portfolio PDF ↗',
    ar: 'ملف الأعمال PDF ↗',
  }

  const portfolioLabel =
    portfolioLabels[currentLanguage] || portfolioLabels.en

  const portfolioUrl =
    'https://drive.google.com/file/d/13kjaHn6VyAu9D146kD0Y_-FY8vEe1tYN/view?usp=sharing'

  const services = [
    {
      title: t('home.services.architecturalDesign.title'),
      description: t('home.services.architecturalDesign.description'),
      image: '/images/villa-amour/6.png',
    },

    {
      title: t('home.services.plansDrawings.title'),
      description: t('home.services.plansDrawings.description'),
      image:
        '/images/villa-amour/Collage de photos minimaliste bleu et vert (3).png',
    },

    {
      title: t('home.services.interiorDesign.title'),
      description: t('home.services.interiorDesign.description'),
      image:
        '/images/villa-amour/Collage de photos minimaliste bleu et vert (6).png',
    },

    {
      title: t('home.services.visualization.title'),
      description: t('home.services.visualization.description'),
      image:
        '/images/villa-amour/Collage de photos minimaliste bleu et vert (4).png',
    },

    {
      title: t('home.services.landscapeUrban.title'),
      description: t('home.services.landscapeUrban.description'),
      image:
        '/images/villa-amour/Collage de photos minimaliste bleu et vert (5).png',
    },
  ]

  return (
    <>
      <Hero />

      {/* =====================================================
          SERVICES
          ===================================================== */}

      <section className="what-we-do">
        <div className="services-stack">
          {services.map((service, i) => (
            <article
              className={`service-showcase service-showcase--${i + 1} ${
                i % 2 === 1 ? 'service-showcase--reverse' : ''
              }`}
              key={service.title}
            >
              <div className="container service-showcase__grid">
                <Reveal
                  variant="rise"
                  delay={60}
                  className="service-showcase__media"
                >
                  <div className="service-showcase__image">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading={i === 0 ? 'eager' : 'lazy'}
                    />
                  </div>
                </Reveal>

                <div className="service-showcase__content">
                  <Reveal variant="rise">
                    <h3 className="service-showcase__title">
                      {service.title}
                    </h3>
                  </Reveal>

                  <Reveal variant="rise" delay={80}>
                    <p className="service-showcase__description">
                      {service.description}
                    </p>
                  </Reveal>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          PROJECTS
          ===================================================== */}

      <section className="index-block">
        <div className="container index-block__head meta-row">
          <span></span>
          <span>{projects.length}</span>
        </div>

        {projects.map((project, i) => (
          <ProjectTeaser
            key={project.slug}
            project={project}
            reverse={i % 2 === 1}
          />
        ))}

        <div className="container index-block__foot">
          <Link
            to="/projects"
            className="text-link"
            data-cursor="link"
          >
            {t('home.viewFullIndex')}
          </Link>
        </div>
      </section>

      {/* =====================================================
          PROFILE
          ===================================================== */}

      <section className="section about-teaser">
        <div className="container">
          <span className="label about-teaser__label">
            {t('home.profile')}
          </span>

          <div className="about-teaser__grid">
            <Reveal
              variant="full"
              className="about-teaser__portrait"
            >
              <img
                src="/images/profile/WhatsApp Image 2026-03-22 at 00.45.50.jpeg"
                alt={profile.name}
                loading="lazy"
              />
            </Reveal>

            <Reveal
              variant="rise"
              delay={100}
              className="about-teaser__content"
            >
              <h2 className="display-3">
                {profile.name}
              </h2>

              <span className="label">
                {profile.age} — {profile.role}
              </span>

              <p className="body-md">
                {t('home.profileDescription')}
              </p>

              <Link
                to="/about"
                className="text-link"
                data-cursor="link"
              >
                {t('home.fullProfile')}
              </Link>

              <br />

              <a
                href={portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
                data-cursor="link"
                style={{ marginTop: '12px' }}
              >
                {portfolioLabel}
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
          ===================================================== */}

      <section className="cta-final">
        <div className="container">
          <Reveal
            variant="rise"
            as="h2"
            className="display-1 cta-final__text"
          >
            {t('home.buildLine1')}
            <br />
            {t('home.buildLine2')}
          </Reveal>

          <Reveal variant="rise" delay={120}>
            <Link
              to="/contact"
              className="cta-final__link"
              data-cursor="link"
            >
              {t('home.startProject')}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}