import s from './MyPublication.module.scss';
import Link from 'next/link';
import { AiOutlineEye } from 'react-icons/ai';
import { Text } from '@/shared/components';
import { MdKeyboardArrowRight } from 'react-icons/md';

export const Publication = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container_left}>
        <Text bold color="dark" mb="mb_sm" size="lg" ta="left">
          Как я тут оказался
        </Text>
        <Text color="light" size="sm" ta="left">
          Мое путешествие началось во время пандемии...
        </Text>
        <div className={s.container_bot}>
          <Link className={s.publicationLink} href="#china">
            #china
          </Link>
          <div className={s.view_counter}>
            <AiOutlineEye />
            <Text color="light" mb="mb_none" size="sm" ta="left">
              9780
            </Text>
          </div>
        </div>
      </div>
      <div className={s.container_right}>
        <MdKeyboardArrowRight />
      </div>
    </div>
  );
};
