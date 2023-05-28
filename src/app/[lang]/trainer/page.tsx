import PageTitle, { SubTitle } from '@/components/page-title'
import { Locale } from '@/../i18n-config'
import { getDictionary } from '../../../../get-dictionary'
import { getAlphabet } from '../../../../utils/alphabet'
import Trainer from '@/components/trainer'
import { getExamples } from '../../../../utils/example'

export const metadata = {
  title: 'Trainer',
}

export default async function TrainerPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)
  const alphabet = await getAlphabet()
  const examples = await getExamples()
  const mapping = Object.values(alphabet).map(letter => [letter.cyrillic, letter.latin])

  return (
    <div>
      <PageTitle>{dictionary.pages.trainer.title}</PageTitle>
      <p className="max-w-2xl mb-8">{dictionary.pages.trainer.info}</p>

      <SubTitle>{dictionary.pages.trainer.subtitle}</SubTitle>
      <Trainer mapping={mapping as any} examples={examples} />
    </div>
  )
}
