import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Reveal from '../components/Reveal'
import ParallaxImage from '../components/ParallaxImage'

import { projects } from '../data/projects'

import './project-index.css'

const projectTranslationKeys = {
  'villa-amour': 'villaAmour',
  'cfc-business-hub': 'cfcBusinessHub',
  'sungir-park': 'sungirPark',
  zenata: 'zenata',
  'micro-rayon': 'microRayon',
}

export default function ProjectIndex() {
  const { t } = useTranslation()

  const getTranslatedProject = (project) => {
    const key = projectTranslationKeys[project.slug]

    if (!key) {
      return project
    }

    return {
      ...project,

      kicker: t(
        `projects.${key}.kicker`,
        {
          defaultValue: project.kicker,
        }
      ),

      location: t(
        `projects.${key}.location`,
        {
          defaultValue: project.location,
        }
      ),

      typology: t(
        `projects.${key}.typology`,
        {
          defaultValue: project.typology,
        }
      ),
    }
  }

  return (
    <main className="index-page">

      {/* =====================================================
          HEADER
          ===================================================== */}

      <header className="index-page__head container">

        <span className="label">
          {t('projectIndex.label')}
        </span>

        <h1 className="display-1">
          {t('projectIndex.title')}
        </h1>

        <p className="body-lg">
          {t('projectIndex.intro')}
        </p>

      </header>


      {/* =====================================================
          PROJECT LIST
          ===================================================== */}

      <div className="index-list">

        {projects.map((project, i) => {
          const translatedProject =
            getTranslatedProject(project)

          return (
            <Link
              to={`/projects/${project.slug}`}
              className="index-row"
              key={project.slug}
              data-cursor="project"
            >

              <div className="container index-row__grid">

                <Reveal
                  variant="rise"
                  as="span"
                  className="index-row__number figure"
                >
                  {project.index}
                </Reveal>


                <div className="index-row__body">

                  <Reveal
                    variant="rise"
                    delay={60}
                  >
                    <span className="label">
                      {translatedProject.kicker}
                    </span>
                  </Reveal>


                  <Reveal
                    variant="rise"
                    delay={100}
                    as="h2"
                    className="display-2 index-row__title"
                  >
                    {project.title}
                  </Reveal>


                  <Reveal
                    variant="rise"
                    delay={140}
                    className="meta-row index-row__meta"
                  >

                    <span>
                      {translatedProject.location}
                    </span>

                    <span>
                      {translatedProject.typology}
                    </span>

                    <span dir="ltr">
                      {project.year}
                    </span>

                  </Reveal>

                </div>


                <Reveal
                  variant="mask"
                  className={`index-row__image ${
                    i % 2 === 1
                      ? 'index-row__image--tall'
                      : ''
                  }`}
                >

                  <ParallaxImage
                    src={project.cover}
                    alt={project.title}
                    strength={22}
                  />

                </Reveal>

              </div>

            </Link>
          )
        })}

      </div>

    </main>
  )
}