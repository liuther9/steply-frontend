import React, { forwardRef, ForwardRefRenderFunction } from "react";
import s from './button.module.scss'

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  type?: "button" | "submit" | "reset" | undefined;
}

const Button: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { children, ...rest },
  ref
) => {
  return (
    <button {...rest} className={s.button} ref={ref}>
      {children}
    </button>
  );
};

export default forwardRef(Button);
