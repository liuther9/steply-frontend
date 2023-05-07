import { FC, ReactNode } from 'react';
import s from './text.module.scss';

enum TEXT_SIZE {
  XSMALL = 'xs',
  SMALL = 'sm',
  MEDIUM = 'md',
  LARGE = 'lg',
  XLARGE = 'xl',
}

enum TEXT_COLOR {
  DARK = 'dark',
  LIGHT = 'light',
}

export const Text: FC<{
  children: ReactNode;
  size?: `${TEXT_SIZE}`;
  color?: `${TEXT_COLOR}`;
  bold?: boolean;
}> = ({ children, size, color, bold }) => {
  const sizeProp = size ? ` ${s[size]}` : '';
  const colorProp = color ? ` ${s[color]}` : '';
  const boldProp = bold ? ` ${s.bold}` : '';

  return <p className={s.text + sizeProp + colorProp + boldProp}>{children}</p>;
};
