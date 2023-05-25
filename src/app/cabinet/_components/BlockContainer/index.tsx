import { FC, ReactNode } from 'react'

import { Title } from '@/shared/components'

import s from './BlockContainer.module.scss'

export const BlockContainer: FC<{ children: ReactNode; title: string }> = ({ children, title }) => {
	return (
		<div className={s.wrapper}>
			<Title bold component='h2' ta='left'>
				{title}
			</Title>
			<div className={s.container}>{children}</div>
		</div>
	)
}
