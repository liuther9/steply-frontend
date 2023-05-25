import { Title } from '@/shared/components'

import { IStudent } from '../../types'
import { Student } from '../Student'
import s from './BestStudentsList.module.scss'

type Props = {
	data: IStudent[]
}

export const BestStudentsList: React.FC<Props> = ({ data }) => {
	return (
		<section className={s.wrapper}>
			<Title ta='left'>Лучшие студенты</Title>
			{data.map((item) => (
				<Student key={item.id} student={item} />
			))}
		</section>
	)
}
