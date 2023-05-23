import Image from 'next/image'

import { Text } from '@/shared/components'

import s from '../CityCard/page.module.scss'

interface ICityCardProps {
	city: {
		id: number
		name: string
		title: string
		steps: {
			id: number
			title: string
		}[]
	}
}

const CityCard: React.FC<ICityCardProps> = ({ city: { name, steps, title } }) => {
	return (
		<>
			<div className={s.title_container}>
				<Text bold color='dark' mb='mb_sm' size='lg' ta='left'>
					{title}
				</Text>
				<Image alt={name} className={s.imageWrap} height={24} src={`/flags/${name}.svg`} width={32} />
			</div>
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
