import { AiOutlineRight } from 'react-icons/ai'

import s from '../_components/card.module.scss'

const Card = ({ cityName }: { cityName: string }) => {
	return (
		<div className={s.hwWrapper}>
			<div className={s.hwList}>
				<div className={s.hwItem}>
					<h3 className={s.cityName}>{cityName}</h3>
					<p className={s.phase}>Этап 1</p>
					<span className={s.hwText}> Посмотрите все сайты заданных университетов и составьте список, что вам подходит по специальности</span>
					<AiOutlineRight className={s.reactIcon} />
				</div>
			</div>
		</div>
	)
}
export default Card
