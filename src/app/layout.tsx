import './globals.css'

import SupabaseProvider from '@utils/supabase-provider'
import { Inter } from 'next/font/google'
import Head from 'next/head'

import { META_PIXEL_ID, YANDEX_METRICS_ID } from '@/constants'
import { MetaPixelMetrics } from '@/utils/MetaPixelMetrics'
import YandexMetrics from '@/utils/YandexMetrics'

const inter = Inter({
	subsets: ['cyrillic', 'latin'],
	display: 'fallback',
})

export const metadata = {
	title: 'Steply образовательный контент',
	description: 'Предоставление качественного контента на тему образования за рубежом',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html className={inter.className} lang='en'>
			<Head>
				{/* <noscript>
					<img alt='' src={`https://mc.yandex.ru/watch/${YANDEX_METRICS_ID}`} style={{ position: 'absolute', left: '-9999px' }} />
					<img
						alt=''
						height='1'
						src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
						style={{ display: 'none' }}
						width='1'
					/>
				</noscript> */}
			</Head>
			<body>
				{/* <YandexMetrics ymId={YANDEX_METRICS_ID} />
				<MetaPixelMetrics fbId={META_PIXEL_ID} /> */}
				<SupabaseProvider>
					{children}
					<div id='portal' />
				</SupabaseProvider>
			</body>
		</html>
	)
}
