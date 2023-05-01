'use client'

import { useState } from 'react'
import { useSupabase } from '@utils/supabase-provider'
import LoginModal from './_components/LoginCarousel'
import Button from '@/shared/components/Button'
import { Title } from '@/shared/components/Title'
import { Text } from '@/shared/components/Text'
import s from './page.module.scss'
import Link from 'next/link'
import * as Form from '@radix-ui/react-form'
import TextInput from '@/shared/components/TextInput'

export default function Login() {
	const [showCarousel, setShowCarousel] = useState(true)
	const { supabase } = useSupabase()

	const handleSignUp = async () => {
		await supabase.auth.signUp({
			email: 'jon@supabase.com',
			password: 'sup3rs3cur3',
		})
	}

	const handleLogin = async () => {
		await supabase.auth.signInWithPassword({
			email: 'jon@supabase.com',
			password: 'sup3rs3cur3',
		})
	}

	const handleLogout = async () => {
		await supabase.auth.signOut()
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
	}

	return (
		<div className={s.wrapper}>
			{!showCarousel && (
				<div className={s.container}>
					<Title>Авторизация</Title>
					<Text>Авторизуйтесь и вам будут доступны все курсы</Text>
					<Form.Root
						className={s.form}
						onSubmit={(e) => {
							e.preventDefault()
							const data = Object.fromEntries(new FormData(e.currentTarget))
							console.log(data)
						}}
					>
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
						<div className={s.buttons_container}>
							<Form.Submit asChild>
								<Button type='submit'>Авторизоваться</Button>
							</Form.Submit>
							<div className={s.other_options}>
								<span className={s.option}>Другие способы</span>
								<Link href='/signup' className={s.option}>
									Регистрация
								</Link>
							</div>
						</div>
					</Form.Root>
				</div>
			)}
			{showCarousel && <LoginModal closeCarousel={() => setShowCarousel(false)} />}
		</div>
	)
}
