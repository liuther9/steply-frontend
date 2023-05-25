import { GiTrophyCup } from 'react-icons/gi'

import { Text } from '@/shared/components'

import s from '../Document/Document.module.scss'

const Document = ({ titleDocument }: { titleDocument: string }) => {
	return (
		<>
			<div className={s.documentDiv}>
				<div className={s.container_top}>
					<Text bold color='dark' mb='mb_sm' size='lg'>
						{titleDocument}
					</Text>
					<GiTrophyCup className={s.cupIcon} />
				</div>

				<Text color='light' size='sm' ta='left'>
					За пройденный курс по Профориентации. Вы большой молодец!
				</Text>
			</div>
		</>
	)
}

export default Document
