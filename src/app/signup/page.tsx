'use client'

import * as Form from '@radix-ui/react-form'
import { useSupabase } from '@utils/supabase-provider'
import Button from '@/shared/components/Button'
import { Title } from '@/shared/components/Title'
import { Text } from '@/shared/components/Text'
import s from './page.module.scss'
import TextInput from '@/shared/components/TextInput'

const FormDemo = () => {
	return (
		<Form.Root className={s.wrapper} onSubmit={e => {
			e.preventDefault()
			const data = Object.fromEntries(new FormData(e.currentTarget));
			console.log(data)
		}}>
		<Title>Авторизация</Title>
		<Text>Авторизуйтесь и вам будут доступны все курсы</Text>
			<Form.Field className={s.container} name='email'>
				<div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
					<Form.Label className='FormLabel'>Email</Form.Label>
					<Form.Message className={s.label} match='valueMissing'>
						Пожалуйста, введите ваш email
					</Form.Message>
					<Form.Message className='FormMessage' match='typeMismatch'>
						Пожалуйста, введите корректный email
					</Form.Message>
				</div>
				<Form.Control asChild>
					<TextInput type='email' required />
				</Form.Control>
			</Form.Field>

			<Form.Field className={s.container} name='password'>
				<div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
					<Form.Label className='FormLabel'>Пароль</Form.Label>
					<Form.Message className={s.label} match='valueMissing'>
						Please enter your email
					</Form.Message>
					<Form.Message className={s.label} match='typeMismatch'>
						Пожалуйста, введите корректный пароль
					</Form.Message>
				</div>
				<Form.Control asChild>
					<TextInput type='email' required />
				</Form.Control>
			</Form.Field>
			
			<Form.Submit asChild>
				<Button type='submit'>Авторизоваться</Button>
			</Form.Submit>
		</Form.Root>
	)
}

export default FormDemo
