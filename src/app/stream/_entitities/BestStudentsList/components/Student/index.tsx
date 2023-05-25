import Image from 'next/image'

import { Text } from '@/shared/components'

import { IStudent } from '../../types'
import s from './Student.module.scss'

type Props = {
	student: IStudent
}

export const Student: React.FC<Props> = ({ student }) => {
	return (
		<div className={s.wrapper}>
			<div className={s.ranking}>{student.rank}</div>
			<div className={s.avatar}>
				<Image alt='' fill src={'/vercel.svg'} />
			</div>
			<Text mb='mb_none' size='sm'>
				{student.name} {student.surname}
			</Text>
		</div>
	)
}
