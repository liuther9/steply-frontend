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

enum SPACINGS {
  XSMALL = 'mb_xs',
  SMALL = 'mb_sm',
  MEDIUM = 'mb_md',
  LARGE = 'mb_lg',
  XLARGE = 'mb_xl',
  NONE = 'mb_none',
}

export const Text: FC<{
  children: ReactNode;
  size?: `${TEXT_SIZE}`;
  color?: `${TEXT_COLOR}`;
  bold?: boolean;
  mb?: `${SPACINGS}`;
  ta?: 'left' | 'center' | 'right';
}> = ({ children, size, color, bold, mb, ta }) => {
  const sizeProp = size ? ` ${s[size]}` : '';
  const colorProp = color ? ` ${s[color]}` : '';
  const boldProp = bold ? ` ${s.bold}` : '';
  const mbProp = mb ? ` ${s[mb]}` : '';
  const taProp = ta ? ` ${s[ta]}` : '';

  return (
    <p className={s.text + sizeProp + colorProp + boldProp + mbProp + taProp}>
      {children}
    </p>
  );
};
