import { BiCoin } from 'react-icons/bi';
import { NextPage } from 'next';
import { Publication } from '../cabinet/_components/MyPublication/index';
import s from './page.module.scss';
import Card from './_components/CountryCard';
import { Button, Text, Title } from '@/shared/components';
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
        <Title ta="left">{'User Name'}</Title>
        <div className={s.divWrapper}>
          <BiCoin />
          <Text mb="mb_none" size="sm">
            {'17 741 steplycoin'}
          </Text>
        </div>
        <Button variant="purple">Пройти анкету</Button>
      </div>
      <Title bold component="h2" ta="left">
        Домашние работы
      </Title>
      <div className={s.hwWrapper}>
        {data.map(i => (
          <Card cityName={i.cityName} key={i.id} />
        ))}
      </div>
      <Publication />
      <Title bold component="h2" ta="left">
        Ваши документы
      </Title>
      <div className={s.hwWrapper}>
        {document.map(i => (
          <Document key={i.id} titleDocument={i.titleDocument} />
        ))}
      </div>
    </section>
  );
};

export default Cabinet;
