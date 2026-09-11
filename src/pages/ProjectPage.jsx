import { useEffect } from 'react'
import {
  Link,
  Navigate,
  useParams,
} from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Reveal from '../components/Reveal'
import ParallaxImage from '../components/ParallaxImage'

import {
  getProject,
  projects,
} from '../data/projects'

import './project-page.css'


// =========================================================
// PROJECT TRANSLATION KEYS
// =========================================================

const PROJECT_TRANSLATION_KEYS = {
  'villa-amour': 'villaAmour',
  'cfc-business-hub': 'cfcBusinessHub',
  'sungir-park': 'sungirPark',
  zenata: 'zenata',
  'micro-rayon': 'microRayon',
}


// =========================================================
// TRANSLATE PROJECT BASIC INFORMATION
// =========================================================

function translateProject(project, t) {
  const key =
    PROJECT_TRANSLATION_KEYS[project.slug]

  if (!key) {
    return project
  }

  return {
    ...project,

    typology: t(
      `projects.${key}.typology`,
      {
        defaultValue: project.typology,
      }
    ),

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

    status: project.status
      ? t(
          `projects.${key}.status`,
          {
            defaultValue: project.status,
          }
        )
      : null,

    intro: t(
      `projects.${key}.intro`,
      {
        defaultValue: project.intro,
      }
    ),

    accentDetail: t(
      `projects.${key}.accentDetail`,
      {
        defaultValue:
          project.accentDetail,
      }
    ),
  }
}


// =========================================================
// TRANSLATE PROJECT SECTIONS
// =========================================================

function translateSections(project, t) {
  const sections =
    project.sections.map((section) => ({
      ...section,

      items: section.items
        ? section.items.map((item) => ({
            ...item,
          }))
        : undefined,
    }))


  // =======================================================
  // VILLA AMOUR
  // =======================================================

  if (project.slug === 'villa-amour') {

    if (sections[1]) {
      sections[1].label = t(
        'projects.villaAmour.floorPlan',
        {
          defaultValue:
            sections[1].label,
        }
      )
    }


    const interiors =
      sections.find(
        (section) =>
          section.kind === 'interiors'
      )


    if (
      interiors &&
      interiors.items
    ) {

      if (interiors.items[0]) {

        interiors.items[0].title = t(
          'projects.villaAmour.interior01Title',
          {
            defaultValue:
              interiors.items[0].title,
          }
        )


        interiors.items[0].text = t(
          'projects.villaAmour.interior01Text',
          {
            defaultValue:
              interiors.items[0].text,
          }
        )

      }


      if (interiors.items[1]) {

        interiors.items[1].title = t(
          'projects.villaAmour.interior02Title',
          {
            defaultValue:
              interiors.items[1].title,
          }
        )


        interiors.items[1].text = t(
          'projects.villaAmour.interior02Text',
          {
            defaultValue:
              interiors.items[1].text,
          }
        )

      }

    }


    if (sections[4]?.text) {

      sections[4].text = t(
        'projects.villaAmour.facadeText',
        {
          defaultValue:
            sections[4].text,
        }
      )

    }

  }


  // =======================================================
  // CFC BUSINESS HUB
  // =======================================================

  if (
    project.slug ===
    'cfc-business-hub'
  ) {

    if (sections[5]) {

      sections[5].label = t(
        'projects.cfcBusinessHub.sections',
        {
          defaultValue:
            sections[5].label,
        }
      )

    }


    if (sections[6]) {

      sections[6].text = t(
        'projects.cfcBusinessHub.materialText',
        {
          defaultValue:
            sections[6].text,
        }
      )

    }


    if (sections[7]) {

      sections[7].label = t(
        'projects.cfcBusinessHub.mainFrontage',
        {
          defaultValue:
            sections[7].label,
        }
      )


      sections[7].text = t(
        'projects.cfcBusinessHub.mainFrontageText',
        {
          defaultValue:
            sections[7].text,
        }
      )

    }


    if (sections[8]) {

      sections[8].label = t(
        'projects.cfcBusinessHub.curvedFrontage',
        {
          defaultValue:
            sections[8].label,
        }
      )


      sections[8].text = t(
        'projects.cfcBusinessHub.curvedFrontageText',
        {
          defaultValue:
            sections[8].text,
        }
      )

    }

  }


  // =======================================================
  // SUNGIR PARK
  // =======================================================

  if (project.slug === 'sungir-park') {

    if (sections[0]) {

      sections[0].label = t(
        'projects.sungirPark.park',
        {
          defaultValue:
            sections[0].label,
        }
      )


      sections[0].note = t(
        'projects.sungirPark.note',
        {
          defaultValue:
            sections[0].note,
        }
      )

    }


    if (sections[1]) {

      sections[1].label = t(
        'projects.sungirPark.sitePlan',
        {
          defaultValue:
            sections[1].label,
        }
      )

    }


    if (sections[2]) {

      sections[2].label = t(
        'projects.sungirPark.urbanStrategy',
        {
          defaultValue:
            sections[2].label,
        }
      )

    }


    if (sections[3]) {

      sections[3].label = t(
        'projects.sungirPark.perspective',
        {
          defaultValue:
            sections[3].label,
        }
      )

    }

  }


  return sections
}


// =========================================================
// DRAWING SECTION
// =========================================================

function DrawingSection({ section }) {
  return (
    <section className="section section--tight drawing">

      <div className="container">

        <div className="drawing__head meta-row">

          <span>
            {section.label}
          </span>

          <span dir="ltr">
            {section.drawingNumber}
          </span>

        </div>


        <Reveal
          variant="mask"
          className="drawing__plate"
        >

          <img
            src={section.image}
            alt={section.label}
            loading="lazy"
          />

        </Reveal>


        {section.note && (

          <Reveal
            variant="rise"
            className="drawing__note"
          >

            <p className="body-md">
              {section.note}
            </p>

          </Reveal>

        )}

      </div>

    </section>
  )
}


// =========================================================
// FULL SECTION
// =========================================================

function FullSection({ section }) {
  return (
    <section className="fullscreen-moment">

      <div className="container fullscreen-moment__inner">

        <ParallaxImage
          src={section.image}
          alt={section.label}
          strength={0}
          className="fullscreen-moment__image"
        />


        <div className="fullscreen-moment__label">

          <span className="label-strong">
            {section.label}
          </span>


          {section.note && (

            <p className="body-md fullscreen-moment__note">
              {section.note}
            </p>

          )}

        </div>

      </div>

    </section>
  )
}


// =========================================================
// INTERIORS SECTION
// =========================================================

function InteriorsSection({ section }) {
  return (
    <section className="section interiors">

      <div className="container">

        <span className="label">
          {section.label}
        </span>


        <div className="interiors__list">

          {section.items.map(
            (item, i) => (

              <div
                className="interiors__item"
                key={item.title}
              >

                <Reveal
                  variant={
                    i % 2 === 0
                      ? 'slide-right'
                      : 'slide-left'
                  }
                  className="interiors__image"
                >

                  <ParallaxImage
                    src={item.image}
                    alt={item.title}
                    strength={24}
                  />

                </Reveal>


                <Reveal
                  variant="rise"
                  delay={100}
                  className="interiors__text"
                >

                  <h3 className="display-3">
                    {item.title}
                  </h3>

                  <p className="body-md">
                    {item.text}
                  </p>

                </Reveal>

              </div>

            )
          )}

        </div>

      </div>

    </section>
  )
}


// =========================================================
// FACADE SECTION
// =========================================================

function FacadeSection({ section }) {
  return (
    <section className="section section--tight facade">

      <div className="container">

        <div className="drawing__head meta-row">

          <span>
            {section.label}
          </span>

          <span dir="ltr">
            {section.drawingNumber}
          </span>

        </div>


        <Reveal
          variant="rise"
          className="facade__text"
        >

          <p className="body-lg">
            {section.text}
          </p>

        </Reveal>


        <Reveal
          variant="mask"
          className="facade__image"
        >

          <ParallaxImage
            src={section.image}
            alt={section.label}
            strength={36}
          />

        </Reveal>

      </div>

    </section>
  )
}


// =========================================================
// PROGRAM SECTION
// =========================================================

function ProgramSection({ section }) {
  const { t } = useTranslation()

  return (
    <section className="section section--tight program">

      <div className="container">

        <div className="drawing__head meta-row">

          <span>
            {section.label}
          </span>

          <span dir="ltr">
            {section.drawingNumber}
          </span>

        </div>


        <Reveal
          variant="mask"
          className="program__section-image"
        >

          <img
            src={section.sectionImage}
            alt={section.label}
            loading="lazy"
          />

        </Reveal>


        <div className="program__legend">

          {section.legend.map(
            (item, index) => (

              <span
                key={`${item.label}-${index}`}
                className="program__legend-item label"
              >

                <i
                  style={{
                    background:
                      item.color,
                  }}
                />

                {item.label}

              </span>

            )
          )}

        </div>


        <div className="program__materials">

          <Reveal
            variant="slide-right"
            className="program__material-img"
          >

            <img
              src={section.materialImage}
              alt=""
              loading="lazy"
            />

          </Reveal>


          <Reveal
            variant="rise"
            delay={80}
            className="program__material-text"
          >

            <span className="label">
              {t(
                'projectPage.materiality'
              )}
            </span>

            <p className="body-md">
              {section.text}
            </p>

          </Reveal>


          <Reveal
            variant="slide-left"
            delay={40}
            className="program__pattern-img"
          >

            <img
              src={section.patternImage}
              alt=""
              loading="lazy"
            />

          </Reveal>

        </div>

      </div>

    </section>
  )
}


// =========================================================
// SECTION MAP
// =========================================================

const SECTION_MAP = {
  full: FullSection,
  drawing: DrawingSection,
  interiors: InteriorsSection,
  facade: FacadeSection,
  program: ProgramSection,
}


// =========================================================
// PROJECT PAGE
// =========================================================

export default function ProjectPage() {
  const { slug } = useParams()

  const { t } = useTranslation()

  const originalProject =
    getProject(slug)


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])


  if (!originalProject) {

    return (
      <Navigate
        to="/projects"
        replace
      />
    )

  }


  // =======================================================
  // TRANSLATED PROJECT
  // =======================================================

  const project =
    translateProject(
      originalProject,
      t
    )


  const translatedSections =
    translateSections(
      originalProject,
      t
    )


  // =======================================================
  // NEXT PROJECT
  // =======================================================

  const idx =
    projects.findIndex(
      (p) => p.slug === slug
    )


  const next =
    projects[
      (idx + 1) %
      projects.length
    ]


  // =======================================================
  // PAGE
  // =======================================================

  return (
    <main className="project-page">

      {/* ===================================================
          PROJECT HERO
          =================================================== */}

      <header className="project-hero">

        <div className="container project-hero__head">

          <span className="figure">

            {project.index}

            {project.index && ' — '}

            {t(
              'projectPage.project'
            )}

          </span>


          <span className="figure">

            {project.status
              ? project.status
              : t(
                  'projectPage.privateCommission'
                )}

          </span>

        </div>


        <div className="container">

          <h1 className="display-1 project-hero__title">
            {project.title}
          </h1>

        </div>


        <div className="container project-hero__meta meta-row">

          <span>
            {project.location}
          </span>

          <span>
            {project.typology}
          </span>

          <span dir="ltr">
            {project.year}
          </span>

        </div>


        <Reveal
          variant="mask"
          className="project-hero__image"
        >

          <ParallaxImage
            src={project.coverWide}
            alt={project.title}
            strength={50}
          />

        </Reveal>


        {project.intro && (

          <div className="container">

            <Reveal
              variant="rise"
              className="project-hero__intro"
            >

              <p className="body-lg">
                {project.intro}
              </p>

            </Reveal>

          </div>

        )}


        {(project.siteArea ||
          project.builtArea) && (

          <div className="container project-hero__figures meta-row">

            {project.siteArea && (

              <span>

                {t(
                  'projectPage.siteArea'
                )}

                {' — '}

                <span dir="ltr">
                  {project.siteArea}
                </span>

              </span>

            )}


            {project.builtArea && (

              <span>

                {t(
                  'projectPage.builtArea'
                )}

                {' — '}

                <span dir="ltr">
                  {project.builtArea}
                </span>

              </span>

            )}

          </div>

        )}

      </header>


      {/* ===================================================
          PROJECT SECTIONS
          =================================================== */}

      {translatedSections.map(
        (section, i) => {

          const Component =
            SECTION_MAP[
              section.kind
            ]


          if (!Component) {
            return null
          }


          return (

            <Component
              section={section}
              key={`${section.kind}-${i}`}
            />

          )

        }
      )}


      {/* ===================================================
          NEXT PROJECT
          =================================================== */}

      <section className="project-next">

        <Link
          to={`/projects/${next.slug}`}
          className="project-next__link"
          data-cursor="project"
        >

          <div className="container project-next__inner">

            <span className="label">
              {t(
                'projectPage.nextProject'
              )}
            </span>


            <h2 className="display-1">
              {next.title}
            </h2>


            <span
              className="figure"
              dir="ltr"
            >
              {next.index} →
            </span>

          </div>

        </Link>

      </section>

    </main>
  )
}