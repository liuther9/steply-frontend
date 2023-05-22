'use client'

import { FC, ReactNode, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import s from './ModalPortal.module.scss'

export const ModalPortal: FC<{ children: ReactNode }> = ({ children }) => {
	const ref = useRef<Element | null>(null)
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		ref.current = document.querySelector<HTMLElement>('#portal')
		setMounted(true)
	}, [])

	return mounted && ref.current ? createPortal(<div className={s.wrapper}>{children}</div>, ref.current) : null
}
