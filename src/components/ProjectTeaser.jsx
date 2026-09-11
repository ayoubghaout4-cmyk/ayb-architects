import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Reveal from './Reveal'

import './project-teaser.css'

const projectTranslationKeys = {
  'villa-amour': 'villaAmour',
  'cfc-business-hub': 'cfcBusinessHub',
  'sungir-park': 'sungirPark',
  zenata: 'zenata',
  'micro-rayon': 'microRayon',
}

export default function ProjectTeaser({
  project,
  reverse = false,
}) {
  const { t } = useTranslation()

  const translationKey =
    projectTranslationKeys[project.slug]

  const kicker = translationKey
    ? t(
        `projects.${translationKey}.kicker`,
        {
          defaultValue: project.kicker,
        }
      )
    : project.kicker

  const location = translationKey
    ? t(
        `projects.${translationKey}.location`,
        {
          defaultValue: project.location,
        }
      )
    : project.location

  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`teaser ${
        reverse ? 'teaser--reverse' : ''
      }`}
      data-cursor="project"
    >

      {/* IMAGE */}

      <div className="teaser__image">

        <img
          src={
            project.coverWide ||
            project.cover
          }
          alt={project.title}
          loading="lazy"
        />

      </div>


      {/* INFO */}

      <div className="teaser__info">

        <Reveal
          variant="rise"
          delay={80}
        >
          <span className="label">
            {kicker}
          </span>
        </Reveal>


        <Reveal
          variant="rise"
          delay={140}
          as="h3"
          className="display-2 teaser__title"
        >
          {project.title}
        </Reveal>


        <Reveal
          variant="rise"
          delay={200}
          className="teaser__meta meta-row"
        >

          <span>
            {location}
          </span>

          <span dir="ltr">
            {project.year}
          </span>

        </Reveal>

      </div>

    </Link>
  )
}