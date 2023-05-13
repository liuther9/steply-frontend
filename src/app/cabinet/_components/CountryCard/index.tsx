import s from './CountryCard.module.scss'
import { Text } from '@/shared/components'
import { MdKeyboardArrowRight } from 'react-icons/md'

const Card = ({ cityName }: { cityName: string }) => {
	return (
		<div className={s.wrapper}>
			<div className={s.container_left}>
				<Text bold color='dark' mb='mb_sm' size='lg'>
					{cityName}
				</Text>
				<Text color='light' mb='mb_sm' size='sm'>
					Этап 1
				</Text>
				<Text color='light' size='sm' ta='left'>
					{' '}
					Посмотрите все сайты заданных университетов и составьте список, что вам подходит по специальности
				</Text>
			</div>
			<div className={s.container_right}>
				<MdKeyboardArrowRight />
			</div>
		</div>
	)
}
export default Card
