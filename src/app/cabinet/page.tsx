import { BiCoin } from 'react-icons/bi';
import { NextPage } from 'next';
import { Publication } from '../cabinet/_components/MyPublication/index';
import s from './page.module.scss';
import Card from './_components/CountryCard';
import { Text, Title } from '@/shared/components';
import Document from './_components/Document';
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

const document = [
  {
    id: 1,
    titleDocument: 'Атестат',
  },

  {
    id: 2,
    titleDocument: 'Атестат',
  },
  {
    id: 3,
    titleDocument: 'Атестат',
  },
  {
    id: 4,
    titleDocument: 'Атестат',
  },
  {
    id: 5,
    titleDocument: 'Атестат',
  },

  {
    id: 6,
    titleDocument: 'Атестат',
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
      <h2 className={s.hwTitle}>Домашние работы</h2>
      <div className={s.hwWrapper}>
        {data.map(i => (
          <Card cityName={i.cityName} key={i.id} />
        ))}
      </div>
      <Publication />
      <h3 className={s.hwTitle}>Ваши документы</h3>
      <div className={s.hwWrapper}>
        {document.map(i => (
          <Document key={i.id} titleDocument={i.titleDocument} />
        ))}
      </div>
    </section>
  );
};

export default Cabinet;
