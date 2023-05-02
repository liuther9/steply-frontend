import React, { forwardRef } from 'react';
import s from './button.module.scss';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export const Button: React.ForwardRefExoticComponent<
  Omit<ButtonProps, 'ref'> & React.RefAttributes<HTMLButtonElement>
> = forwardRef(({ children, ...rest }, ref) => {
  return (
    <button {...rest} className={s.button} ref={ref}>
      {children}
    </button>
  );
});
