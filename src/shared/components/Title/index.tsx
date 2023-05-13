import { createElement, FC, ReactNode } from 'react'
import s from './title.module.scss'

export const Title: FC<{
	children: ReactNode
	ta?: 'left' | 'center' | 'right'
	component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	bold?: boolean
}> = ({ children, ta, component, bold }) => {
	const taProp = ta ? ` ${s[ta]}` : ''
	const componentProp = component ? ` ${s[component]}` : ''
	const boldProp = bold ? ` ${s.bold}` : ''
	const className = `${s.title + taProp + componentProp + boldProp}`

	return createElement(component || 'h1', { className }, children)
}
