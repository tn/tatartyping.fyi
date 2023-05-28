'use client'

import { usePathname } from 'next/navigation'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Link from 'next/link'
import { i18n } from '../../i18n-config'

export default function LocaleSwitcher({ current }: { current: string }) {
  const pathName = usePathname()
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'

    const segments = pathName.split('/')

    segments[1] = locale

    return segments.join('/')
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="border border-gray-200 rounded-md py-2 px-4 max-sm:py-1 max-sm:px-2 max-sm:text-xs outline-none hover:border-gray-300">{current?.toUpperCase()}</button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content side="bottom" align="end" className="shadow-lg bg-white w-32 border border-gray-100 rounded-lg">
          {i18n.locales.map((locale) => (
            <DropdownMenu.Item key={locale} className="outline-none hover:bg-gray-100 data-[highlighted=true]:bg-gray-100">
              <Link href={redirectedPathName(locale)} className="px-4 py-2 block outline-none">{locale.toUpperCase()}</Link>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
