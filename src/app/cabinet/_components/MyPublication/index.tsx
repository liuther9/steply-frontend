import s from '../MyPublication/MyPublication.module.scss';
import style from '../../page.module.scss';
import Link from 'next/link';
import { AiOutlineEye, AiOutlineRight } from 'react-icons/ai';
import { Text } from '@/shared/components';

export const Publication = () => {
  return (
    <>
      <h3 className={style.hwTitle}>Мои публикации</h3>
      <div className={s.publication}>
        <Text bold color="dark" mb="mb_sm" size="lg">
          Как я тут оказался
        </Text>
        <Text color="light" size="sm" ta="left">
          Мое путешествие началось во время пандемии...
        </Text>
        <Link className={s.publicationLink} href="#china">
          #china
        </Link>
        <AiOutlineRight className={style.reactIcon} />
        <span className={s.publicationNum}>9780</span>
        <AiOutlineEye className={s.eyeIcon} />
      </div>
    </>
  );
};

export default Publication;
