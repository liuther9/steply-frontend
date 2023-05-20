import { createElement, FC, ReactNode } from 'react'
import s from './title.module.scss'

enum TEXT_SIZE {
	XSMALL = 'xs',
	SMALL = 'sm',
	MEDIUM = 'md',
	LARGE = 'lg',
	XLARGE = 'xl',
}

enum SPACINGS {
	XSMALL = 'mb_xs',
	SMALL = 'mb_sm',
	MEDIUM = 'mb_md',
	LARGE = 'mb_lg',
	XLARGE = 'mb_xl',
	NONE = 'mb_none',
}

export const Title: FC<{
	children: ReactNode
	size?: `${TEXT_SIZE}`
	ta?: 'left' | 'center' | 'right'
	component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	mb?: `${SPACINGS}`
	bold?: boolean
}> = ({ children, ta, component, bold, size, mb }) => {
	const sizeProp = size ? ` ${s[size]}` : ''
	const taProp = ta ? ` ${s[ta]}` : ''
	const componentProp = component ? ` ${s[component]}` : ''
	const boldProp = bold ? ` ${s.bold}` : ''
	const mbProp = mb ? ` ${s[mb]}` : ''
	const className = `${s.title + taProp + componentProp + boldProp + sizeProp + mbProp}`

	return createElement(component || 'h1', { className }, children)
}
