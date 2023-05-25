import Image from 'next/image'

import { Text } from '@/shared/components'

import { IAnnouncement } from '../../_types/Announcement'
import s from '../Announcements/Announcements.module.scss'

interface Props {
	announ: IAnnouncement
}

export const Announcement: React.FC<Props> = ({ announ: { name, cityTitle } }) => {
	return (
		<>
			<div className={s.announceDiv}>
				<div className={s.container_top}>
					<Image alt={name} className={s.streamIcon} height={24} src={`/flags/${name}.svg`} width={32} />
					<Text bold color='dark' mb='mb_sm' size='sm'>
						{cityTitle}
					</Text>
				</div>

				<Text color='light' size='sm' ta='left'>
					Голосуй за эту страну и мы отправим тебя туда на 1 год!
				</Text>
				<div className={s.likeIcon}>
					<Image alt='like' className={s.streamIcon} height={32} src='/like.png' width={64} />
				</div>
			</div>
		</>
	)
}
