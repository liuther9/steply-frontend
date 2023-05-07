import s from './CountryCard.module.scss';
import { Text } from '@/shared/components';
import { AiOutlineRight } from 'react-icons/ai';

const Card = ({ cityName }: { cityName: string }) => {
  return (
    <div className={s.hwItem}>
      <Text bold color="dark" size="lg">
        {cityName}
      </Text>
      <Text color="light" size="sm">
        Этап 1
      </Text>
      <Text color="light" size="sm">
        {' '}
        Посмотрите все сайты заданных университетов и составьте список, что вам
        подходит по специальности
      </Text>
      <AiOutlineRight className={s.reactIcon} />
    </div>
  );
};
export default Card;
