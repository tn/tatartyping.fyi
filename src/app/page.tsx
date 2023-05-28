import PageTitle from '@/components/page-title'
import Link from 'next/link'

const langs = [
  { name: 'Татарча', code: 'tt' },
  { name: 'Русский', code: 'ru' },
  { name: 'English', code: 'en' },
  { name: 'Tatarça', code: 'ttlat' },
]

export default function IndexPage() {
  return (
    <div className="px-16 py-9 text-center">
      <PageTitle>Tatar Typing</PageTitle>
      <div className="max-w-2xl h-80 m-auto flex justify-center items-center max-md:flex-col">
        <div className="text-5xl font-black text-blue-600">Исәнмесез</div>
        <div className="text-5xl mx-9 max-md:rotate-90">→</div>
        <div className="text-5xl font-black text-green-600">Isänmesez</div>
      </div>

      <div className="max-w-2xl m-auto flex justify-center items-center max-md:flex-col">
        {langs.map((lang) => (
          <div className="text-2xl mx-9 max-md:mb-3" key={lang.code}>
            <Link href={`/${lang.code}`}>{lang.name}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
