import PageTitle from '@/components/page-title'
import { Locale } from '../../../../i18n-config'
import { getDictionary } from '../../../../get-dictionary'
import styles from './page.module.css'

export const metadata = {
  title: 'About',
}

export default async function AboutPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)

  return (
    <div>
      <PageTitle>{dictionary.pages.about.title}</PageTitle>
      <div className="max-w-2xl">
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: dictionary.pages.about.info }} />
      </div>
    </div>
  )
}
