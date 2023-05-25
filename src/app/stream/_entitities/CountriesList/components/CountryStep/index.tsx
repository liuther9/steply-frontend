import { Text, Title } from '@/shared/components'

import { ICountryStep } from '../../types'
import { StepStatus } from '../StepStatus'
import s from './CountryStep.module.scss'

type Props = {
	step: ICountryStep
}

export const CountryStep: React.FC<Props> = ({ step: { title, live, status } }) => (
	<div className={s.wrapper}>
		<div className={s.container_top}>
			<Title component='h4' mb='mb_none'>
				{title}
			</Title>
			{live && <StepStatus status='live' />}
			{status && <StepStatus status={status} />}
		</div>
		<Text color='light' size='sm' ta='left'>
			{' '}
			Обзор на все программы обучения
		</Text>
	</div>
)
