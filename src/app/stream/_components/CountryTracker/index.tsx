import Image from 'next/image'

import { Text } from '@/shared/components'

import { ICountryStep } from '../../_types'
import { CountryStep } from '../CountryStep'
import s from './CountryTracker.module.scss'

interface Props {
	city: {
		id: number
		name: string
		title: string
		steps: ICountryStep[]
	}
}

export const CountryTracker: React.FC<Props> = ({ city: { name, steps, title } }) => {
	return (
		<div className={s.wrapper}>
			<div className={s.title_container}>
				<Text bold color='dark' mb='mb_sm' size='lg' ta='left'>
					{title}
				</Text>
				<Image alt={name} height={24} src={`/flags/${name}.svg`} width={32} />
			</div>
			<div className={s.country_container}>
				{steps.map((step) => (
					<CountryStep key={step.id} step={step} />
				))}
			</div>
		</div>
	)
}
