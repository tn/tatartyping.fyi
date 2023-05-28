import PageTitle from '@/components/page-title'
import { getDictionary } from '../../../../get-dictionary'
import { Locale } from '../../../../i18n-config'
import { getAlphabet } from '../../../../utils/alphabet'
import { capitalize } from '../../../../utils/strings'

const getCharsCapitalized = (chars: string[] | string) => {
  if (Array.isArray(chars)) {
    return `${capitalize(chars[0])}(${capitalize(chars[1])})`
  }

  return capitalize(chars)
}

const getCharsLowercased = (chars: string[] | string) => {
  if (Array.isArray(chars)) {
    return `${chars[0].toLowerCase()}(${chars[1].toLowerCase()})`
  }

  return chars.toLowerCase()
}

export const metadata = {
  title: 'Alphabet',
}

export default async function Alphabet({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)
  const alphabet = await getAlphabet()

  return (
    <div>
      <PageTitle>{dictionary.pages.alphabet.title}</PageTitle>
      <div className="grid grid-cols-8 max-xl:grid-cols-6 max-lg:grid-cols-5 max-md:grid-cols-4 max-sm:grid-cols-2">
        {Object.values(alphabet).map(letter => (
          <div key={letter.cyrillic} className="px-5 py-3 text-center">
            <p className="font-medium text-lg">{capitalize(letter.cyrillic)} {letter.cyrillic.toLowerCase()}</p>
            {letter.latin ? <p className="font-medium text-lg">{getCharsCapitalized(letter.latin)} {getCharsLowercased(letter.latin)}{letter?.reference}</p> : <p>-</p>}
            {letter.transcription ? <p className="font-mono text-gray-700">[{letter.transcription}]</p> : <p>-</p>}
          </div>
        ))}
      </div>
      <div className="mt-6 border-t border-t-gray-100 py-5 text-gray-700">
        <p>
          <strong>*</strong> &mdash; {dictionary.pages.alphabet.reference_one}
        </p>
        <p>
          <strong>**</strong> &mdash; {dictionary.pages.alphabet.reference_two}
        </p>
      </div>
    </div>
  )
}
