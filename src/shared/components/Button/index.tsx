import React, { forwardRef } from 'react'

import s from './button.module.scss'

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
	type?: 'button' | 'submit' | 'reset' | undefined
	variant?: 'purple'
}

export const Button: React.ForwardRefExoticComponent<Omit<ButtonProps, 'ref'> & React.RefAttributes<HTMLButtonElement>> = forwardRef(
	({ children, variant, ...rest }, ref) => {
		const variantProp = variant ? ` ${s[variant]}` : ''

		return (
			<button {...rest} className={s.button + variantProp} ref={ref}>
				{children}
			</button>
		)
	},
)
