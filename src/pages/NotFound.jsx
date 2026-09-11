import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <main
      className="container"
      style={{
        paddingTop: '30vh',
        paddingBottom: '20vh',
      }}
    >
      <span className="label">
        404
      </span>

      <h1
        className="display-1"
        style={{
          margin: '14px 0 24px',
        }}
      >
        {t('notFound.title')}
      </h1>

      <Link
        to="/"
        className="text-link"
        data-cursor="link"
      >
        {t('notFound.home')}
      </Link>
    </main>
  )
}