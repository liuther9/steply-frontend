'use client'

import * as Form from '@radix-ui/react-form'
import { useSupabase } from '@utils/supabase-provider'
import { NextPage } from 'next'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { PatternFormat } from 'react-number-format'

import { Button, MISMATCH_TYPES, Text, TextInput, Title } from '@/shared/components'
import { useCheckSession } from '@/utils'

import s from './page.module.scss'

const SignUpPage: NextPage = () => {
	const [serverErrors, setServerErrors] = useState(false)
	const [phoneError, setPhoneError] = useState(false)
	const [loading, setLoading] = useState(false)
	const { supabase } = useSupabase()
	const router = useRouter()

	useCheckSession()

	const getNumbers = (e: string) => e.match(/\d/g)?.join('')

	const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const { email, password, phone } = Object.fromEntries(new FormData(e.currentTarget)) as {
			email: string
			password: string
			passwordRepeat: string
			phone: string
		}

		setPhoneError(!isValidPhone(phone))
		if (!isValidPhone(phone)) {
			return
		}
		setLoading(true)
		const { data, error } = await supabase.auth.signUp({ email, password })
		error && setServerErrors(true)
		if (!error && data) {
			const ppp = await supabase.from('users').update({ id: data.user?.id, phone })
			console.log('www.error', ppp.error)
		}
		setLoading(false)
		// !error && router.push(`/signup/confirm?email=${email}`)
	}

	const isValidPhone = (e: string) => getNumbers(e)?.length === 11

	return (
		<Form.Root className={s.wrapper} onSubmit={handleSignUp}>
			<Title>Регистрация</Title>
			<Text>Зарегестрируйтесь и вам будут доступны все курсы</Text>

			{/*EMAIL*/}
			<Form.Field className={s.container} name='email' serverInvalid={serverErrors}>
				<div className={s.label_container}>
					<Form.Label className={s.label}>Email</Form.Label>
					<Form.Message className={s.error} match={MISMATCH_TYPES.VALUE_MISSING}>
						Пожалуйста, введите ваш email
					</Form.Message>
					<Form.Message className={s.error} match={MISMATCH_TYPES.TYPE_MISMATCH}>
						Пожалуйста, введите корректный email
					</Form.Message>
					{serverErrors && <Form.Message className={s.error}>Неверные данные</Form.Message>}
				</div>
				<Form.Control asChild>
					<TextInput required type='email' />
				</Form.Control>
			</Form.Field>

			{/*PHONE*/}
			<Form.Field className={s.container} name='phone'>
				<div className={s.label_container}>
					<Form.Label className={s.label}>Номер телефона</Form.Label>
					{phoneError && <span className={s.error}>Введите корректный номер</span>}
				</div>
				<Form.Control asChild>
					<PatternFormat allowEmptyFormatting className={s.phone_mask} format='+7 (7##) #### ###' mask='*' />
				</Form.Control>
			</Form.Field>

			{/*PASSWORD*/}
			<Form.Field className={s.container} name='password'>
				<div className={s.label_container}>
					<Form.Label className={s.label}>Пароль</Form.Label>
					<Form.Message className={s.error} match={MISMATCH_TYPES.VALUE_MISSING}>
						Пожалуйста, введите пароль
					</Form.Message>
					<Form.Message className={s.error} match={MISMATCH_TYPES.TYPE_MISMATCH}>
						Пожалуйста, введите корректный пароль
					</Form.Message>
				</div>
				<Form.Control asChild>
					<TextInput required type='password' />
				</Form.Control>
			</Form.Field>

			{/*PASSWORD REPEAT*/}
			<Form.Field className={s.container} name='passwordRepeat'>
				<div className={s.label_container}>
					<Form.Label className={s.label}>Повторите пароль</Form.Label>
					<Form.Message className={s.error} match={MISMATCH_TYPES.VALUE_MISSING}>
						Введите повторно пароль
					</Form.Message>
					<Form.Message className={s.error} match={(value, formData) => value !== formData.getAll('password')[0]}>
						Пароли должны совпадать
					</Form.Message>
				</div>
				<Form.Control asChild>
					<TextInput required type='password' />
				</Form.Control>
			</Form.Field>

			<Form.Submit asChild>
				<Button disabled={loading} type='submit'>
					Зарегестрироваться
				</Button>
			</Form.Submit>
		</Form.Root>
	)
}

export default SignUpPage
