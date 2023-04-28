import './globals.css'
import SupabaseProvider from '@utils/supabase-provider'
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Steply образовательный контент',
  description: 'Предоставление качественного контента на тему образования за рубежом',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <SupabaseProvider>{children}<div id='portal' /></SupabaseProvider>
      </body>
    </html>
  )
}
