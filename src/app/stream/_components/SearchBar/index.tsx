import s from '../SearchBar/SearchBar.module.scss'
// import React, { useState } from 'react';
import { SlMagnifier } from 'react-icons/sl'

const SearchBar = () => {
	return (
		<div className={s.inputWrap}>
			<SlMagnifier className={s.inputIcon} />
			<input autoComplete='off' autoFocus className={s.textInput} name='searchQuery' placeholder='Ищите нужные стримы...' type='text' />
		</div>
	)
}

export default SearchBar
