import { useRef, useState } from 'react';
import Dots from './Dots';
import { Button, Text, Title } from '@/shared/components';
import { useWindowSize } from '@/shared/hooks';
import s from './LoginCarousel.module.scss';

const slidenumber = [1, 2, 3];

export default function LoginCarousel({
  closeCarousel,
}: {
  closeCarousel: () => void;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { width } = useWindowSize();
  const [slide, setSlide] = useState(0);
  const [scrollable, setScrollable] = useState(true);

  const handleClick = () => {
    if (slide < slidenumber.length - 1) {
      setSlide(slide + 1);
      setScrollable(false);
      containerRef.current?.scrollBy({
        left: width,
        behavior: 'smooth',
      });
      setTimeout(() => setScrollable(true), 500);
    } else {
      closeCarousel();
    }
  };

  return (
    <div className={s.wrapper}>
      <div className={s.container_top} ref={containerRef}>
        <div className={s.slider}>
          {slidenumber.map(i => (
            <div className={s.slide} key={i}>
              <div className={s.content}>
                <Title>Степли это</Title>
                <Text>
                  В разделе “Задач” ты можешь зарабатывать деньги выполняя
                  задания от команды steply
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={s.container_bot}>
        <Button disabled={!scrollable} onClick={handleClick}>
          Далее
        </Button>
        <Dots activeIndex={slide} dotCount={slidenumber.length} />
      </div>
    </div>
  );
}
