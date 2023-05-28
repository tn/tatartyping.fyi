import '../globals.css'
import { i18n } from '../../../i18n-config'
import Header from '@/components/header'
import Footer from '@/components/footer'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export const metadata = {
  title: 'Tatar Typing',
  description: '',
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <>
      {/* @ts-ignore */}
      <Header lang={params.lang as any} />
      <div className="px-16 py-9 max-lg:px-10 max-md:px-6 max-sm:px-3 max-sm:py-4">{children}</div>
      <Footer />
    </>
  )
}
