import { NextPage } from 'next'
import s from './page.module.scss'
import { Text, Title } from '@/shared/components'
import SearchBar from './_components/SearchBar'
import CityCard from './_components/CityCard'

const data = [
	{
		id: 0,
		name: 'Czech',
		title: 'Чехия',
		steps: [
			{
				id: 0,
				title: 'Этап 0',
			},
			{
				id: 1,
				title: 'Этап 1',
			},
			{
				id: 2,
				title: 'Этап 2',
			},
			{
				id: 3,
				title: 'Этап 3',
			},
			{
				id: 4,
				title: 'Этап 4',
			},
			{
				id: 5,
				title: 'Этап 5',
			},
		],
	},
	{
		id: 1,
		name: 'Spain',
		title: 'Испания',
		steps: [
			{
				id: 0,
				title: 'Этап 0',
			},
			{
				id: 1,
				title: 'Этап 1',
			},
			{
				id: 2,
				title: 'Этап 2',
			},
			{
				id: 3,
				title: 'Этап 3',
			},
			{
				id: 4,
				title: 'Этап 4',
			},
			{
				id: 5,
				title: 'Этап 5',
			},
		],
	},
	{
		id: 2,
		name: 'China',
		title: 'Китай',
		steps: [
			{
				id: 0,
				title: 'Этап 0',
			},
			{
				id: 1,
				title: 'Этап 1',
			},
			{
				id: 2,
				title: 'Этап 2',
			},
			{
				id: 3,
				title: 'Этап 3',
			},
			{
				id: 4,
				title: 'Этап 4',
			},
			{
				id: 5,
				title: 'Этап 5',
			},
		],
	},
	{
		id: 3,
		name: 'France',
		title: 'Франция',
		steps: [
			{
				id: 0,
				title: 'Этап 0',
			},
			{
				id: 1,
				title: 'Этап 1',
			},
			{
				id: 2,
				title: 'Этап 2',
			},
			{
				id: 3,
				title: 'Этап 3',
			},
			{
				id: 4,
				title: 'Этап 4',
			},
			{
				id: 5,
				title: 'Этап 5',
			},
		],
	},
]

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

			{data.map((item) => (
				<CityCard city={item} key={item.id} />
			))}
		</section>
	)
}

export default Stream
