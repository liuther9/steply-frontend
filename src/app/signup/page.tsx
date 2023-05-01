'use client'

import * as Form from '@radix-ui/react-form'
import { useSupabase } from '@utils/supabase-provider'
import Button from '@/shared/components/Button'
import { Title } from '@/shared/components/Title'
import { Text } from '@/shared/components/Text'
import s from './page.module.scss'
import TextInput from '@/shared/components/TextInput'
import { MISMATCH_TYPES } from '@/shared/components/types'

const FormDemo = () => {
	return (
		<Form.Root
			className={s.wrapper}
			onSubmit={(e) => {
				e.preventDefault()
				const data = Object.fromEntries(new FormData(e.currentTarget))
				console.log(data)
			}}
		>
			<Title>Регистрация</Title>
			<Text>Авторизуйтесь и вам будут доступны все курсы</Text>
			<Form.Field className={s.container} name='email'>
				<div className={s.label_container}>
					<Form.Label className={s.label}>Email</Form.Label>
					<Form.Message className={s.error} match={MISMATCH_TYPES.VALUE_MISSING}>
						Пожалуйста, введите ваш email
					</Form.Message>
					<Form.Message className={s.error} match={MISMATCH_TYPES.TYPE_MISMATCH}>
						Пожалуйста, введите корректный email
					</Form.Message>
				</div>
				<Form.Control asChild>
					<TextInput type='email' required />
				</Form.Control>
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
					<TextInput type='password' required />
				</Form.Control>
			</Form.Field>

			<Form.Submit asChild>
				<Button type='submit'>Зарегестрироваться</Button>
			</Form.Submit>
		</Form.Root>
	)
}

export default FormDemo
