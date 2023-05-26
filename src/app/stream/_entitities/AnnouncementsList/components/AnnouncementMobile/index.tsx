import Image from 'next/image'
import { FcLike } from 'react-icons/fc'

import { Text } from '@/shared/components'

import { IAnnouncement } from '../../types'
import s from '../AnnouncementMobile/AnnouncementMobile.module.scss'

interface Props {
	announcement: IAnnouncement
}

export const AnnounMobile: React.FC<Props> = ({ announcement: { name, cityTitle } }) => {
	return (
		<div className={s.mobile_wrap}>
			<div className={s.container_mob}>
				<Image alt={name} className={s.streamIconMob} height={24} src={`/flags/${name}.svg`} width={32} />
				<Text bold color='dark' mb='mb_sm' size='sm'>
					{cityTitle}
				</Text>
			</div>
			<div className={s.container_mob_like}>
				<FcLike />
				<span>{78}</span>
			</div>
			<button className={s.stream_button_mob}>Еще страны</button>
		</div>
	)
}
