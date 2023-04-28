'use client'

import { useState } from 'react'
import { useSupabase } from '@utils/supabase-provider'
import LoginModal from './_components/LoginCarousel'
import Button from '@/shared/components/Button'
import { Title } from '@/shared/components/Title'
import { Text } from '@/shared/components/Text'
import s from './page.module.scss'
import Link from 'next/link'

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

	const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
	}

	return (
		<div className={s.wrapper}>
			{!showCarousel && (
				<div className={s.container}>
					<Title>Авторизация</Title>
					<Text>Авторизуйтесь и вам будут доступны все курсы</Text>
					<form className={s.form} onSubmit={handleSubmit}>
						<div className={s.buttons_container}>
							<Button type='submit'>Авторизоваться</Button>
							<div className={s.other_options}>
								<span className={s.option}>Другие способы</span>
								<Link href='/signup' className={s.option}>Регистрация</Link>
							</div>
						</div>
					</form>
				</div>
			)}
			{showCarousel && <LoginModal closeCarousel={() => setShowCarousel(false)} />}
		</div>
	)
}
