import { FC, ReactNode } from "react"
import s from './text.module.scss'

export const Text: FC<{ children: ReactNode }> = ({ children }) => {
	return <p className={s.text}>{ children }</p>
}