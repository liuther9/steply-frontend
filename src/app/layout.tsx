import './globals.css'
import SupabaseProvider from '@utils/supabase-provider'

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
    <html lang="en">
      <body>
        <SupabaseProvider>{children}<div id='portal' /></SupabaseProvider>
      </body>
    </html>
  )
}
