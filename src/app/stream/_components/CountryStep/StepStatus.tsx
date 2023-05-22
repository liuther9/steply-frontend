import { Text } from '@/shared/components'

import { EStepStatus } from '../../_constants'
import s from './StepStatus.module.scss'

export const StepStatus: React.FC<{ status: 'completed' | 'live' | 'in_progress' }> = ({ status }) => {
	const className = `${s.wrapper + ' ' + s[status]}`
	const text = status === 'completed' ? EStepStatus.COMPLETED : status === 'live' ? EStepStatus.LIVE : EStepStatus.IN_PROGRESS

	return (
		<div className={className}>
			<Text mb='mb_none' size='sm'>
				{text}
			</Text>
		</div>
	)
}
