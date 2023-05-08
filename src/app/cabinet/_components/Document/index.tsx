import s from '../Document/Document.module.scss';
import { Text } from '@/shared/components';
import { GiTrophyCup } from 'react-icons/gi';

const Document = ({ titleDocument }: { titleDocument: string }) => {
  return (
    <>
      <div className={s.documentDiv}>
        <Text bold color="dark" mb="mb_sm" size="lg">
          {titleDocument}
          <GiTrophyCup className={s.cupIcon} />
        </Text>

        <Text color="light" size="sm" ta="left">
          За пройденный курс по Профориентации. Вы большой молодец!
        </Text>
      </div>
    </>
  );
};

export default Document;
