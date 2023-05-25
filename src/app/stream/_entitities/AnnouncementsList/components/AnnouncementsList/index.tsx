import Image from 'next/image'

import { Text, Title } from '@/shared/components'

import { IAnnouncement } from '../../types'
import { Announcement } from '../Announcement'
import s from './AnnouncementsList.module.scss'

interface Props {
	announcements: IAnnouncement[]
}

export const AnnouncementsList: React.FC<Props> = ({ announcements }) => {
	return (
		<section className={s.wrapper}>
			<Title ta='left'>
				Анонсы <Image alt='stars' className={s.streamImage} height={35} src='/emoji.png' width={35} />
			</Title>
			<Text color='light' size='sm' ta='left'>
				Ставьте лайки и голосуйте за курсы, которые хотите видеть в будущем
			</Text>
			<div className={s.container_announcements}>
				{announcements.map((item: IAnnouncement) => (
					<Announcement announcement={item} key={item.id} />
				))}
			</div>
		</section>
	)
}
