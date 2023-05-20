import s from './SearchBar.module.scss'
import { SlMagnifier } from 'react-icons/sl'

export const SearchBar = () => {
	return (
		<div className={s.inputWrap}>
			<SlMagnifier className={s.inputIcon} />
			<input autoComplete='off' autoFocus className={s.textInput} name='searchQuery' placeholder='Ищите нужные стримы...' type='text' />
		</div>
	)
}
