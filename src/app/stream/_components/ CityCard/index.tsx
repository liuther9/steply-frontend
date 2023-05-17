// import s from '../ CityCard/page.module.scss'
// import { Text } from '@/shared/components'

// const data = [
// 	{
// 		id: 0,
// 		name: 'Chezh',
// 		steps: [
// 			{
// 				id: 0,
// 				title: 'Этап 0',
// 			},
// 			{
// 				id: 1,
// 				title: 'Этап 1',
// 			},
// 			{
// 				id: 2,
// 				title: 'Этап 2',
// 			},
// 			{
// 				id: 3,
// 				title: 'Этап 3',
// 			},
// 			{
// 				id: 4,
// 				title: 'Этап 4',
// 			},
// 			{
// 				id: 5,
// 				title: 'Этап 5',
// 			},
// 		],
// 	},
// 	{
// 		id: 1,
// 		name: 'Spain',
// 		steps: [
// 			{
// 				id: 0,
// 				title: 'Этап 0',
// 			},
// 			{
// 				id: 1,
// 				title: 'Этап 1',
// 			},
// 			{
// 				id: 2,
// 				title: 'Этап 2',
// 			},
// 			{
// 				id: 3,
// 				title: 'Этап 3',
// 			},
// 			{
// 				id: 4,
// 				title: 'Этап 4',
// 			},
// 			{
// 				id: 5,
// 				title: 'Этап 5',
// 			},
// 		],
// 	},
// 	{
// 		id: 2,
// 		name: 'China',
// 		steps: [
// 			{
// 				id: 0,
// 				title: 'Этап 0',
// 			},
// 			{
// 				id: 1,
// 				title: 'Этап 1',
// 			},
// 			{
// 				id: 2,
// 				title: 'Этап 2',
// 			},
// 			{
// 				id: 3,
// 				title: 'Этап 3',
// 			},
// 			{
// 				id: 4,
// 				title: 'Этап 4',
// 			},
// 			{
// 				id: 5,
// 				title: 'Этап 5',
// 			},
// 		],
// 	},
// 	{
// 		id: 3,
// 		name: 'France',
// 		steps: [
// 			{
// 				id: 0,
// 				title: 'Этап 0',
// 			},
// 			{
// 				id: 1,
// 				title: 'Этап 1',
// 			},
// 			{
// 				id: 2,
// 				title: 'Этап 2',
// 			},
// 			{
// 				id: 3,
// 				title: 'Этап 3',
// 			},
// 			{
// 				id: 4,
// 				title: 'Этап 4',
// 			},
// 			{
// 				id: 5,
// 				title: 'Этап 5',
// 			},
// 		],
// 	},
// 	{
// 		id: 4,
// 		name: 'Chezh',
// 		steps: [
// 			{
// 				id: 0,
// 				title: 'Этап 0',
// 			},
// 			{
// 				id: 1,
// 				title: 'Этап 1',
// 			},
// 			{
// 				id: 2,
// 				title: 'Этап 2',
// 			},
// 			{
// 				id: 3,
// 				title: 'Этап 3',
// 			},
// 			{
// 				id: 4,
// 				title: 'Этап 4',
// 			},
// 			{
// 				id: 5,
// 				title: 'Этап 5',
// 			},
// 		],
// 	},
// ]

// const CityCard = ({ cityTitle, id }: { cityTitle: string; id: number }) => {
// 	const city = data.find((city) => city.id === id)
// 	return (
// 		<>
// 			<Text bold color='dark' mb='mb_sm' size='lg' ta='left'>
// 				{cityTitle}
// 			</Text>
// 			<div className={s.cityWrapp}>
// 				{city.steps.map((step) => (
// 					<div className={s.wrapper} key={step.id}>
// 						<div className={s.container_left}>
// 							<Text bold color='dark' mb='mb_sm' size='sm'>
// 								{step.title}
// 							</Text>
// 							<Text color='light' size='sm' ta='left'>
// 								{' '}
// 								Обзор на все программы обучения
// 							</Text>
// 						</div>
// 					</div>
// 				))}
// 			</div>
// 		</>
// 	)
// }

// export default CityCard
