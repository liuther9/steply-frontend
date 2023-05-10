import s from '../MyPublication/MyPublication.module.scss';
import style from '../../page.module.scss';
import Link from 'next/link';
import { AiOutlineEye, AiOutlineRight } from 'react-icons/ai';
import { Text, Title } from '@/shared/components';

export const Publication = () => {
  return (
    <div className={s.wrapper}>
      <Title bold component="h2" ta="left">
        Мои публикации
      </Title>
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
        <Text color="light" mb="mb_none" size="sm" ta="left">
          9780
        </Text>
        <AiOutlineEye />
      </div>
    </div>
  );
};

export default Publication;
