import { NextPage } from 'next'
import Image from 'next/image'

import { Text, Title } from '@/shared/components'

import { CountryTracker, SearchBar } from './_components'
import { Announcement } from './_components/Announcements'
import { ICountryTracker } from './_types'
import s from './page.module.scss'

const data: ICountryTracker[] = [
	{
		id: 0,
		name: 'Czech',
		title: 'Чехия',
		steps: [
			{
				id: 0,
				live: true,
				status: 'completed',
				title: 'Этап 0',
			},
			{
				id: 1,
				live: true,
				status: 'in_progress',
				title: 'Этап 1',
			},
			{
				id: 2,
				live: false,
				title: 'Этап 2',
			},
			{
				id: 3,
				live: false,
				title: 'Этап 3',
			},
			{
				id: 4,
				live: false,
				title: 'Этап 4',
			},
			{
				id: 5,
				live: false,
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
				live: false,
				title: 'Этап 0',
			},
			{
				id: 1,
				live: false,
				title: 'Этап 1',
			},
			{
				id: 2,
				live: false,
				title: 'Этап 2',
			},
			{
				id: 3,
				live: false,
				title: 'Этап 3',
			},
			{
				id: 4,
				live: false,
				title: 'Этап 4',
			},
			{
				id: 5,
				live: false,
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
				live: false,
				title: 'Этап 0',
			},
			{
				id: 1,
				live: false,
				title: 'Этап 1',
			},
			{
				id: 2,
				live: false,
				title: 'Этап 2',
			},
			{
				id: 3,
				live: false,
				title: 'Этап 3',
			},
			{
				id: 4,
				live: false,
				title: 'Этап 4',
			},
			{
				id: 5,
				live: false,
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
				live: false,
				title: 'Этап 0',
			},
			{
				id: 1,
				live: false,
				title: 'Этап 1',
			},
			{
				id: 2,
				live: false,
				title: 'Этап 2',
			},
			{
				id: 3,
				live: false,
				title: 'Этап 3',
			},
			{
				id: 4,
				live: false,
				title: 'Этап 4',
			},
			{
				id: 5,
				live: false,
				title: 'Этап 5',
			},
		],
	},
]

const announce = [
	{
		id: 1,
		name: 'Tuvalu',
		cityTitle: 'Тувалу',
	},

	{
		id: 2,
		name: 'Tuvalu',
		cityTitle: 'Тувалу',
	},
	{
		id: 3,
		name: 'Tuvalu',
		cityTitle: 'Тувалу',
	},
	{
		id: 4,
		name: 'Tuvalu',
		cityTitle: 'Тувалу',
	},
	{
		id: 5,
		name: 'Tuvalu',
		cityTitle: 'Тувалу',
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
				<CountryTracker city={item} key={item.id} />
			))}
			<button className={s.strimButton}>Еще страны</button>
			<div className={s.strimWrap}>
				<Image alt='stars' className={s.streamImage} height={35} src='/emoji.png' width={28} />
				<Title ta='left'>Анонсы</Title>
				<Text color='light' size='sm' ta='left'>
					Ставьте лайки и голосуйте за курсы, которые хотите видеть в будущем
				</Text>
			</div>
			<div className={s.announceWrap}>
				{announce.map((item) => (
					<Announcement announ={item} key={item.id} />
				))}
			</div>
		</section>
	)
}

export default Stream
