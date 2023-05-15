import s from '../TextInput/TextInput.module.scss'
// import React, { useState } from 'react';
import { SlMagnifier } from 'react-icons/sl'

const TextInputStrim = () => {
	return (
		<div className={s.inputWrap}>
			<SlMagnifier className={s.inputIcon} />
			<input autoComplete='off' autoFocus className={s.textInput} name='searchQuery' placeholder='Ищите нужные стримы...' type='text' />
		</div>
	)
}

export default TextInputStrim
