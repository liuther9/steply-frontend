import { useRef, useState } from 'react'
import Dots from './Dots'
import s from './LoginCarousel.module.scss'
import { useWindowSize } from '@/shared/hooks'
import { Title } from '@/shared/components/Title'
import { Text } from '@/shared/components/Text'
import { Button } from '@/shared/components/Button'

const slidenumber = [1, 2, 3]
export default function LoginCarousel({ closeCarousel }: { closeCarousel: () => void }) {
	const containerRef = useRef<HTMLDivElement | null>(null)
	const { width } = useWindowSize()
	const [slide, setSlide] = useState(0)
	const [scrollable, setScrollable] = useState(true)

	const handleClick = () => {
		if (slide < slidenumber.length - 1) {
			setSlide(slide + 1)
			setScrollable(false)
			containerRef.current?.scrollBy({
				left: width,
				behavior: 'smooth',
			})
			setTimeout(() => setScrollable(true), 500)
		} else closeCarousel()
	}

	return (
		<div className={s.wrapper}>
			<div className={s.container_top} ref={containerRef}>
				<div className={s.slider}>
					{slidenumber.map((i) => (
						<div key={i} className={s.slide}>
							<div className={s.content}>
								<Title>Степли это</Title>
								<Text>В разделе “Задач” ты можешь зарабатывать деньги выполняя задания от команды steply</Text>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className={s.container_bot}>
				<Button onClick={handleClick} disabled={!scrollable}>
					Далее
				</Button>
				<Dots dotCount={slidenumber.length} activeIndex={slide} />
			</div>
		</div>
	)
}
