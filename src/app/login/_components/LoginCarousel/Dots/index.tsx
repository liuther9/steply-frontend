import { FC } from 'react'
import s from './dots.module.scss'

const Dots: FC<{ dotCount: number; activeIndex: number }> = ({ dotCount, activeIndex }) => {
	return (
		<div className={s.wrapper}>
			{Array.from(Array(dotCount).keys()).map((i, index) => (
				<div key={i} className={s.dot + ((activeIndex === index) ? ` ${s.active}` : '')}></div>
			))}
		</div>
	)
}

export default Dots
