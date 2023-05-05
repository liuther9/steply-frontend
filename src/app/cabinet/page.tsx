import { BiCoin } from 'react-icons/bi';
// import { AiOutlineRight } from 'react-icons/ai';
import { NextPage } from 'next';
import s from './page.module.scss';
import Card from '../cabinet/_components/index';

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

const Cabinet: NextPage = (p: any) => {
  console.log(p);
  return (
    <section className={s.section}>
      <div className={s.wrapper}>
        <h1 className={s.title}>User Name</h1>
        <div className={s.divWrapper}>
          <BiCoin style={{ fontSize: '27px' }} />
          <p className={s.text}>17 741 steplycoin</p>
        </div>
        <button className={s.button}>Пройти анкету</button>
      </div>
      <h2 className={s.hwTitle}>Домашние рыботы</h2>
      <div className={s.hwWrapper}>
        {data.map(i => (
          <Card cityName={i.cityName} key={i.id} />
        ))}
      </div>

      {/* <div className={s.hwWrapper}>
        <ul className={s.hwList}>
          <li className={s.hwItem}>
            <h3 className={s.cityName}>Чехия</h3>
            <p className={s.phase}>Этап 1</p>
            <span className={s.hwText}>
              {' '}
              Посмотрите все сайты заданных университетов и составьте список,
              что вам подходит по специальности
            </span>
            <AiOutlineRight className={s.reactIcon} />
          </li>

          <li className={s.hwItem}>
            <h3 className={s.cityName}>Профориентация</h3>
            <p className={s.phase}>Этап 1</p>
            <span className={s.hwText}>
              Посмотрите все сайты заданных университетов и составьте список,
              что вам подходит по специальности
            </span>
            <AiOutlineRight className={s.reactIcon} />
          </li>

          <li className={s.hwItem}>
            <h3 className={s.cityName}>Германия</h3>
            <p className={s.phase}>Этап 1</p>
            <span className={s.hwText}>
              Посмотрите все сайты заданных университетов и составьте список,
              что вам подходит по специальности
            </span>
            <AiOutlineRight className={s.reactIcon} />
          </li>

          <li className={s.hwItem}>
            <h3 className={s.cityName}>Турция</h3>
            <p className={s.phase}>Этап 1</p>
            <span className={s.hwText}>
              Посмотрите все сайты заданных университетов и составьте список,
              что вам подходит по специальности
            </span>
            <AiOutlineRight className={s.reactIcon} />
          </li>
        </ul>
      </div> */}
    </section>
  );
};

export default Cabinet;
