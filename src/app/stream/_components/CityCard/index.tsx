import s from '../CityCard/page.module.scss'
import { Text } from '@/shared/components'

interface ICityCardProps {
	city: {
		id: number
		name: string
		steps: {
			id: number
			title: string
		}[]
	}
}

const CityCard: React.FC<ICityCardProps> = ({ city: { name, steps } }) => {
	return (
		<>
			<Text bold color='dark' mb='mb_sm' size='lg' ta='left'>
				{name}
			</Text>
			<div className={s.cityWrapp}>
				{steps.map((step) => (
					<div className={s.wrapper} key={step.id}>
						<div className={s.container_left}>
							<Text bold color='dark' mb='mb_sm' size='sm'>
								{step.title}
							</Text>
							<Text color='light' size='sm' ta='left'>
								{' '}
								Обзор на все программы обучения
							</Text>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default CityCard
