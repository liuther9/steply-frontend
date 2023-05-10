import { FC, ReactNode } from 'react';
import s from './BlockContainer.module.scss';
import { Title } from '@/shared/components';

export const BlockContainer: FC<{ children: ReactNode; title: string }> = ({
  children,
  title,
}) => {
  return (
    <div className={s.wrapper}>
      <Title>{title}</Title>
      <div className={s.container}>{children}</div>
    </div>
  );
};
