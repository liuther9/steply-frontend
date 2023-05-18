import { FC } from 'react'

type Props = {
	h?: string
	w?: string
}

export const Czech: FC<Props> = ({ h, w }) => {
	return (
		<svg fill='none' height={h ?? '24'} viewBox='0 0 32 24' width={w ?? '32'} xmlns='http://www.w3.org/2000/svg'>
			<g clipPath='url(#clip0_261_3767)'>
				<rect fill='#F93939' height={h ?? '24'} rx='4' width={w ?? '32'} />
				<path clipRule='evenodd' d='M0 0H32V11.2H0V0Z' fill='white' fillRule='evenodd' />
				<path clipRule='evenodd' d='M0 0L15.2381 12L0 24V0Z' fill='#1A47B8' fillRule='evenodd' />
			</g>
			<defs>
				<clipPath id='clip0_261_3767'>
					<rect fill='white' height={h ?? '24'} rx='4' width={w ?? '32'} />
				</clipPath>
			</defs>
		</svg>
	)
}
