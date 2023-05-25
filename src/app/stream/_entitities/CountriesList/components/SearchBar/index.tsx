import { SlMagnifier } from 'react-icons/sl'

import s from './SearchBar.module.scss'

export const SearchBar = () => {
	return (
		<div className={s.wrapper}>
			<SlMagnifier className={s.inputIcon} />
			<input autoComplete='off' autoFocus className={s.textInput} name='searchQuery' placeholder='Ищите нужные стримы...' type='text' />
		</div>
	)
}
