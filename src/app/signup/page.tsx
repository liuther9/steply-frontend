'use client'

import { FormEvent, useState } from 'react'
import { NextPage } from 'next'
import { PatternFormat } from 'react-number-format'
import * as Form from '@radix-ui/react-form'
import { useSupabase } from '@utils/supabase-provider'
import { Button, MISMATCH_TYPES, Text, TextInput, Title } from '@/shared/components'
import s from './page.module.scss'
import { useRouter } from 'next/navigation'
import { useCheckSession } from '@/utils'

const SignUpPage: NextPage = () => {
	const [serverErrors, setServerErrors] = useState(false)
	const [maskedInput, setMaskedInput] = useState('')
	const [loading, setLoading] = useState(false)
	const { supabase } = useSupabase()
	const router = useRouter()

	// useCheckSession()

	const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const { email, password, phone } = Object.fromEntries(new FormData(e.currentTarget)) as {
			email: string
			password: string
			passwordRepeat: string
			phone: string
		}
		console.log('first', phone)

		// setLoading(true)
		// const { error } = await supabase.auth.signUp({ email, password })
		// error && setServerErrors(true)
		// setLoading(false)
		// !error && router.push(`/signup/confirm?email=${email}`)
	}

	return (
		<Form.Root className={s.wrapper} onSubmit={handleSignUp}>
			<Title>Регистрация</Title>
			<Text>Зарегестрируйтесь и вам будут доступны все курсы</Text>
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

			<Form.Field className={s.container} name='phone'>
				<div className={s.label_container}>
					<Form.Label className={s.label}>Номер телефона</Form.Label>
					<Form.Message className={s.error}>Пароли должны совпадать</Form.Message>
				</div>
				<PatternFormat allowEmptyFormatting className={s.phone_mask} format='+7 (###) #### ###' mask='_' />
			</Form.Field>

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

			<Form.Field className={s.container} name='passwordRepeat'>
				<div className={s.label_container}>
					<Form.Label className={s.label}>Повторите пароль</Form.Label>
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
