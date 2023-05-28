import Converter from '@/components/converter'
import { Locale } from '../../../../i18n-config'
import { getDictionary } from '../../../../get-dictionary'
import PageTitle from '@/components/page-title'
import { getAlphabet } from '../../../../utils/alphabet'
import { getSymbolFromStringOrArray } from '../../../../utils/strings'

export const metadata = {
  title: 'Converter',
}

export default async function ConverterPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)
  const alphabet = await getAlphabet()
  const mapping = Object.fromEntries(Object.values(alphabet).map(letter => [letter.cyrillic, getSymbolFromStringOrArray(letter.latin, 0)]))

  return (
    <div>
      <PageTitle>{dictionary.pages.converter.title}</PageTitle>
      <Converter mapping={mapping as any} placeholders={[dictionary.pages.converter.type_cyrillic, dictionary.pages.converter.type_latin]} />
    </div>
  )
}
