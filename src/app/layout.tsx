import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

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
    <html>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
