import { BiCoin } from 'react-icons/bi';
import { NextPage } from 'next';
import s from './page.module.scss';

export const revalidate = 0;

const Cabinet: NextPage = (p: any) => {
  console.log(p);
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>User Name</h1>
      <div className={s.divWrapper}>
        <BiCoin style={{ fontSize: '27px' }} />
        <p className={s.text}>17 741 steplycoin</p>
      </div>
      <button className={s.button}>Пройти анкету</button>
    </div>
  );
};

export default Cabinet;
