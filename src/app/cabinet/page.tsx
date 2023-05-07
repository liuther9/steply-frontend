import { BiCoin } from 'react-icons/bi';
import { NextPage } from 'next';
import s from './page.module.scss';
import Card from './_components/CountryCard/index';
import { Text, Title } from '@/shared/components';

const data = [
  {
    id: 1,
    cityName: 'Чехия',
  },

  {
    id: 2,
    cityName: 'Профориентация',
  },
  {
    id: 3,
    cityName: 'Германия',
  },
  {
    id: 4,
    cityName: 'Турция',
  },
];

export const revalidate = 0;

const Cabinet: NextPage = () => {
  return (
    <section className={s.section}>
      <div className={s.wrapper}>
        <Title>{'User Name'}</Title>
        <div className={s.divWrapper}>
          <BiCoin style={{ fontSize: '27px' }} />
          <Text size="sm">{'17 741 steplycoin'}</Text>
        </div>
        <button className={s.button}>Пройти анкету</button>
      </div>
      <h2 className={s.hwTitle}>Домашние рыботы</h2>
      <div className={s.hwWrapper}>
        {data.map(i => (
          <Card cityName={i.cityName} key={i.id} />
        ))}
      </div>
    </section>
  );
};

export default Cabinet;
