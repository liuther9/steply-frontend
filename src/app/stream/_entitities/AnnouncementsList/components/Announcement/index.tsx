import Image from 'next/image'
import { FcLike } from 'react-icons/fc'

import { Text } from '@/shared/components'

import { IAnnouncement } from '../../types'
import s from './Announcement.module.scss'

interface Props {
	announcement: IAnnouncement
}

export const Announcement: React.FC<Props> = ({ announcement: { name, cityTitle } }) => {
	return (
		<div className={s.wrapper}>
			<div className={s.container_top}>
				<Image alt={name} className={s.streamIcon} height={24} src={`/flags/${name}.svg`} width={32} />
				<Text bold color='dark' mb='mb_sm' size='sm'>
					{cityTitle}
				</Text>
			</div>

			<Text color='light' size='sm' ta='left'>
				Голосуй за эту страну и мы отправим тебя туда на 1 год!
			</Text>
			<div className={s.container_like}>
				<FcLike />
				<span>{78}</span>
			</div>
		</div>
	)
}
