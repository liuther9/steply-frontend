import { NextPage } from 'next'
import s from './page.module.scss'
import { Text, Title } from '@/shared/components'
import SearchBar from './_components/SearchBar'
// import CityCard from './_components/ CityCard'

// const city = [
// 	{
// 		id: 1,
// 		cityTitle: 'Чехия',
// 	},

// 	{
// 		id: 2,
// 		cityTitle: 'Испания',
// 	},
// 	{
// 		id: 3,
// 		cityTitle: 'Китай',
// 	},
// 	{
// 		id: 4,
// 		cityTitle: 'Франция',
// 	},
// ]

const Stream: NextPage = () => {
	return (
		<section className={s.StrimSection}>
			<div className={s.strimWrap}>
				<Title ta='left'>Стримы</Title>
				<Text color='light' size='sm' ta='left'>
					Смотрите обучающие стримы от квалифицированных преподователей
				</Text>
			</div>
			<SearchBar />

			{/* <CityCard cityTitle={} id={} /> */}
		</section>
	)
}

export default Stream
