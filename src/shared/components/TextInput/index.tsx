import { ForwardRefRenderFunction, forwardRef } from 'react'
import s from './textinput.module.scss'

const CustomInput: ForwardRefRenderFunction<HTMLInputElement, React.HTMLProps<HTMLInputElement>> = (
	{ ...rest },
	ref
) => <input className={s.input} {...rest} ref={ref} />

export default forwardRef(CustomInput)
