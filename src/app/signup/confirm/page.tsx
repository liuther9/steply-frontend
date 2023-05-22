'use client'

import * as Form from '@radix-ui/react-form'
import { useSupabase } from '@utils/supabase-provider'
import { NextPage } from 'next'
import { useRouter, useSearchParams } from 'next/navigation'
import { FormEvent, useState } from 'react'

import { Button, MISMATCH_TYPES, Text, TextInput, Title } from '@/shared/components'
import { useCheckSession } from '@/utils/useCheckSession'

import s from './page.module.scss'

const ConfirmSignUpPage: NextPage = () => {
	const [serverErrors, setServerErrors] = useState(false)
	const [loading, setLoading] = useState(false)
	const { supabase } = useSupabase()
	const router = useRouter()
	const searchParams = useSearchParams()
	const email = searchParams.get('email') ?? ''

	useCheckSession()

	const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const { otp } = Object.fromEntries(new FormData(e.currentTarget)) as {
			otp: string
		}

		setLoading(true)
		const { error } = await supabase.auth.verifyOtp({
			email,
			token: otp,
			type: 'signup',
		})
		error ? setServerErrors(true) : router.push('/cabinet')
		setLoading(false)
	}

	return (
		<Form.Root className={s.wrapper} onSubmit={handleSignUp}>
			<Title>Подтвердите почту</Title>
			<Text>Откройте вашу почту и введите указаный код</Text>
			<Text>Либо перейдите по ссылке в почте</Text>

			<Form.Field className={s.container} name='otp'>
				<div className={s.label_container}>
					<Form.Label className={s.label}>Код</Form.Label>
					<Form.Message className={s.error} match={MISMATCH_TYPES.VALUE_MISSING}>
						Пожалуйста, введите код
					</Form.Message>
					<Form.Message className={s.error} match={MISMATCH_TYPES.TYPE_MISMATCH}>
						Пожалуйста, введите корректный код
					</Form.Message>
					{serverErrors && <Form.Message className={s.error}>Неверный код</Form.Message>}
				</div>
				<Form.Control asChild>
					<TextInput required type='number' />
				</Form.Control>
			</Form.Field>

			<Form.Submit asChild>
				<Button disabled={loading} type='submit'>
					Подтвердить
				</Button>
			</Form.Submit>
		</Form.Root>
	)
}

export default ConfirmSignUpPage
