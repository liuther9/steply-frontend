import { NextPage } from 'next'

import { ICountryTracker } from './_entitities'
import { AnnouncementsList } from './_entitities/AnnouncementsList'
// import { AnnounMobile } from './_entitities/AnnouncementsList/components/AnnouncementMobile'
import { BestStudentsList } from './_entitities/BestStudentsList/components/BestStudentsList'
import { CountryList } from './_entitities/CountriesList'
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

// const mobileAnnoun = [
// 	{
// 		id: 1,
// 		name: 'Tuvalu',
// 		cityTitle: 'Тувалу',
// 	},
// 	{
// 		id: 2,
// 		name: 'Britain',
// 		cityTitle: 'Великобритания',
// 	},
// 	{
// 		id: 3,
// 		name: 'Uzhbekistan',
// 		cityTitle: 'Узбекистан',
// 	},
// ]

const bestStudents = [
	{ id: 0, avatar_url: '', name: 'Алексей', surname: 'Алексеев', rank: 1 },
	{ id: 1, avatar_url: '', name: 'Алексей', surname: 'Алексеев', rank: 1 },
	{ id: 2, avatar_url: '', name: 'Алексей', surname: 'Алексеев', rank: 1 },
	{ id: 3, avatar_url: '', name: 'Алексей', surname: 'Алексеев', rank: 1 },
]

const Stream: NextPage = () => {
	return (
		<main className={s.StrimSection}>
			<CountryList data={data} />

			<AnnouncementsList announcements={announce} />

			<BestStudentsList data={bestStudents} />
		</main>
	)
}

export default Stream
