import { forwardRef, ForwardRefExoticComponent, HTMLProps, RefAttributes } from 'react'

import s from './textinput.module.scss'

export const TextInput: ForwardRefExoticComponent<Omit<HTMLProps<HTMLInputElement>, 'ref'> & RefAttributes<HTMLInputElement>> = forwardRef(
	({ ...rest }, ref) => <input className={s.input} {...rest} ref={ref} />,
)
