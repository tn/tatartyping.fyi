import Link from 'next/link'
import { FC } from 'react'
import { getDictionary } from '../../get-dictionary'
import LocaleSwitcher from './locale-switcher'

const Header = async ({ lang }: { lang: 'en' | 'tt' | 'ru' | 'ttlat' }) => {
  const dictionary = await getDictionary(lang)
  const urlBuilder = (route: string) => {
    return `/${lang}/${route}`
  }

  return (
    <header className="px-16 py-9 flex justify-between items-center bg-white sticky top-0 border-b border-gray-100 max-lg:px-10 max-md:px-6 max-sm:px-3 max-sm:py-4">
      <Link className="font-bold max-sm:hidden" href={`/${lang}`}>{dictionary.ui.header.logo}</Link>
      <nav className="flex justify-end items-center">
        <Link href={urlBuilder('about')} className="mr-4 hover:text-blue-800 max-sm:text-sm">{dictionary.ui.header.about}</Link>
        <Link href={urlBuilder('alphabet')} className="mr-4 hover:text-blue-800 max-sm:text-sm">{dictionary.ui.header.alphabet}</Link>
        <Link href={urlBuilder('converter')} className="mr-4 hover:text-blue-800 max-sm:text-sm">{dictionary.ui.header.converter}</Link>
        <Link href={urlBuilder('trainer')} className="hover:text-blue-800 max-sm:text-sm">{dictionary.ui.header.trainer}</Link>
      </nav>
      <LocaleSwitcher current={lang} />
    </header>
  )
}

export default Header
