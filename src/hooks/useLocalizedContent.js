import { useTranslation } from 'react-i18next'

export default function useLocalizedContent() {
  const { t } = useTranslation()

  const localizeProfile = (profile) => ({
    ...profile,
    role: t('profile.role', { defaultValue: profile.role }),
    location: t('profile.location', { defaultValue: profile.location }),
    bio: t('profile.bio', { defaultValue: profile.bio }),
    education: profile.education.map((item, index) => ({
      ...item,
      degree: t(`profile.education.${index}.degree`, {
        defaultValue: item.degree,
      }),
      school: t(`profile.education.${index}.school`, {
        defaultValue: item.school,
      }),
    })),
    languages: profile.languages.map((item, index) =>
      t(`profile.languages.${index}`, { defaultValue: item })
    ),
    skills: profile.skills.map((item, index) =>
      t(`profile.skills.${index}`, { defaultValue: item })
    ),
  })

  const localizeProject = (project) => {
    const base = `projects.${project.slug}`

    return {
      ...project,
      title: t(`${base}.title`, { defaultValue: project.title }),
      typology: t(`${base}.typology`, { defaultValue: project.typology }),
      kicker: t(`${base}.kicker`, { defaultValue: project.kicker }),
      location: t(`${base}.location`, { defaultValue: project.location }),
      status: project.status
        ? t(`${base}.status`, { defaultValue: project.status })
        : project.status,
      intro: t(`${base}.intro`, { defaultValue: project.intro }),
      accentDetail: t(`${base}.accentDetail`, {
        defaultValue: project.accentDetail,
      }),
      sections: project.sections.map((section, sectionIndex) => ({
        ...section,
        label: t(`${base}.sections.${sectionIndex}.label`, {
          defaultValue: section.label || '',
        }),
        note: t(`${base}.sections.${sectionIndex}.note`, {
          defaultValue: section.note || '',
        }),
        text: t(`${base}.sections.${sectionIndex}.text`, {
          defaultValue: section.text || '',
        }),
        items: section.items?.map((item, itemIndex) => ({
          ...item,
          title: t(
            `${base}.sections.${sectionIndex}.items.${itemIndex}.title`,
            { defaultValue: item.title }
          ),
          text: t(
            `${base}.sections.${sectionIndex}.items.${itemIndex}.text`,
            { defaultValue: item.text }
          ),
        })),
      })),
    }
  }

  return {
    t,
    localizeProfile,
    localizeProject,
  }
}
