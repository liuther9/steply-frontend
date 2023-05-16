import s from '../ CityCard/page.module.scss'
import { Text } from '@/shared/components'
// import cityIcon from '@/shared'

const CityCard = ({ cityTitle }: { cityTitle: string }) => {
	return (
		<>
			<Text bold color='dark' mb='mb_sm' size='lg' ta='left'>
				{cityTitle}
			</Text>
			<div className={s.cityWrapp}>
				<div className={s.wrapper}>
					<div className={s.container_left}>
						<Text bold color='dark' mb='mb_sm' size='sm'>
							Этап 0
						</Text>
						<Text color='light' size='sm' ta='left'>
							{' '}
							Обзор на все программы обучения
						</Text>
					</div>
				</div>
				<div className={s.wrapper}>
					<div className={s.container_left}>
						<Text bold color='dark' mb='mb_sm' size='sm'>
							Этап 1
						</Text>
						<Text color='light' size='sm' ta='left'>
							{' '}
							Обзор на все программы обучения
						</Text>
					</div>
				</div>
				<div className={s.wrapper}>
					<div className={s.container_left}>
						<Text bold color='dark' mb='mb_sm' size='sm'>
							Этап 2
						</Text>
						<Text color='light' size='sm' ta='left'>
							{' '}
							Обзор на все программы обучения
						</Text>
					</div>
				</div>
				<div className={s.wrapper}>
					<div className={s.container_left}>
						<Text bold color='dark' mb='mb_sm' size='sm'>
							Этап 3
						</Text>
						<Text color='light' size='sm' ta='left'>
							{' '}
							Обзор на все программы обучения
						</Text>
					</div>
				</div>
				<div className={s.wrapper}>
					<div className={s.container_left}>
						<Text bold color='dark' mb='mb_sm' size='sm'>
							Этап 4
						</Text>
						<Text color='light' size='sm' ta='left'>
							{' '}
							Обзор на все программы обучения
						</Text>
					</div>
				</div>
				<div className={s.wrapper}>
					<div className={s.container_left}>
						<Text bold color='dark' mb='mb_sm' size='sm'>
							Этап 5
						</Text>
						<Text color='light' size='sm' ta='left'>
							{' '}
							Обзор на все программы обучения
						</Text>
					</div>
				</div>
			</div>
		</>
	)
}

export default CityCard
