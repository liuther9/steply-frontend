'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { NextPage } from 'next';
import * as Form from '@radix-ui/react-form';
import { useSupabase } from '@utils/supabase-provider';
import LoginCarousel from './_components/LoginCarousel';
import {
  Button,
  MISMATCH_TYPES,
  Text,
  TextInput,
  Title,
} from '@/shared/components';
import s from './page.module.scss';

const Login: NextPage = () => {
  const [serverErrors, setServerErrors] = useState(false);
  const [showCarousel, setShowCarousel] = useState(true);
  const [loading, setLoading] = useState(false);
  const { supabase } = useSupabase();

  const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = Object.fromEntries(
      new FormData(e.currentTarget)
    ) as {
      email: string;
      password: string;
    };
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    error && setServerErrors(true);
    setLoading(false);
  };

  return (
    <div className={s.wrapper}>
      {!showCarousel && (
        <div className={s.login_container}>
          <Title>Авторизация</Title>
          <Text>Авторизуйтесь и вам будут доступны все курсы</Text>
          <Form.Root
            className={s.form}
            onClearServerErrors={() => setServerErrors(false)}
            onSubmit={handleSignIn}
          >
            <Form.Field
              className={s.container}
              name="email"
              serverInvalid={serverErrors}
            >
              <div className={s.label_container}>
                <Form.Label className={s.label}>Email</Form.Label>
                <Form.Message
                  className={s.error}
                  match={MISMATCH_TYPES.VALUE_MISSING}
                >
                  Пожалуйста, введите ваш email
                </Form.Message>
                <Form.Message
                  className={s.error}
                  match={MISMATCH_TYPES.TYPE_MISMATCH}
                >
                  Пожалуйста, введите корректный email
                </Form.Message>
                {serverErrors && (
                  <Form.Message className={s.error}>
                    Неверный логин/пароль
                  </Form.Message>
                )}
              </div>
              <Form.Control asChild>
                <TextInput required type="email" />
              </Form.Control>
            </Form.Field>

            <Form.Field className={s.container} name="password">
              <div className={s.label_container}>
                <Form.Label className={s.label}>Пароль</Form.Label>
                <Form.Message
                  className={s.error}
                  match={MISMATCH_TYPES.VALUE_MISSING}
                >
                  Пожалуйста, введите пароль
                </Form.Message>
                <Form.Message
                  className={s.error}
                  match={MISMATCH_TYPES.TYPE_MISMATCH}
                >
                  Пожалуйста, введите корректный пароль
                </Form.Message>
              </div>
              <Form.Control asChild>
                <TextInput required type="password" />
              </Form.Control>
            </Form.Field>
            <div className={s.buttons_container}>
              <Form.Submit asChild>
                <Button disabled={loading} type="submit">
                  Авторизоваться
                </Button>
              </Form.Submit>
              <div className={s.other_options}>
                <span className={s.option}>Другие способы</span>
                <Link className={s.option} href="/signup">
                  Регистрация
                </Link>
              </div>
            </div>
          </Form.Root>
        </div>
      )}
      {showCarousel && (
        <LoginCarousel closeCarousel={() => setShowCarousel(false)} />
      )}
    </div>
  );
};

export default Login;
