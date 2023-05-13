'use client';

import Button from '@/components/Button';
import Input from '@/components/inputs/Input';

import React, { useCallback, useEffect, useState } from 'react';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import AuthSocialButton from './AuthSocialButton';
import { BsGithub, BsGoogle } from 'react-icons/bs';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

type Variant = 'Login' | 'Register';

const AuthForm = () => {
  const session = useSession();
  const router = useRouter();
  const [variant, setVariant] = useState<Variant>('Login');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (session?.status === 'authenticated') {
      router.push('/home');
    }
  }, [session?.status]);

  const toggleVariant = useCallback(() => {
    if (variant === 'Login') {
      setVariant('Register');
    } else {
      setVariant('Login');
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === 'Register') {
      axios
        .post('/api/register', data)
        .then(() => signIn('credentials', data))
        .catch(() => toast.error('Something went wrong!'))
        .finally(() => setIsLoading(false));
    }
    if (variant === 'Login') {
      signIn('credentials', {
        ...data,
        redirect: false,
      })
        .then((callback) => {
          if (callback?.error) {
            toast.error('Invalid credentials!');
          }
          if (callback?.ok && !callback?.error) {
            toast.success('Logged In!');
            router.push('/home');
          }
        })
        .finally(() => setIsLoading(false));
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    signIn(action, { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error('Invalid Credentials!');
        }
        if (callback?.ok && !callback?.error) {
          toast.success('Logged In!');
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <section className='border-t-[1px] border-b-[1px] px-2 py-5'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=' flex flex-col gap-3 w-fit m-auto'
      >
        <h1 className='font-semibold text-lg text-sky-500 w-fit self-center'>
          {variant === 'Login' ? 'Log In' : 'Sign Up'}
        </h1>
        <main className='flex flex-col gap-3 items-center'>
          {variant === 'Register' && (
            <Input
              id='name'
              label='Name'
              type='text'
              register={register}
              errors={errors}
              disabled={isLoading}
            />
          )}
          <Input
            id='email'
            label='Email'
            type='email'
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <Input
            id='password'
            label='Password'
            type='password'
            register={register}
            errors={errors}
            disabled={isLoading}
          />
        </main>
        <section className='flex items-center gap-5 px-3'>
          <div
            onClick={toggleVariant}
            className='text-xs text-blue-400 cursor-pointer hover:border-b-[2px]'
          >
            {variant === 'Login'
              ? 'Create a new account'
              : 'Already have an account?'}
          </div>
          <Button disabled={isLoading} type='submit'>
            {variant === 'Login' ? 'Sign In' : ' Register'}
          </Button>
        </section>
        <div className='border-t-[1px] relative flex justify-center my-5'>
          <div className='absolute text-xs -top-2 bg-white px-3'>
            Or continue with
          </div>
        </div>
        <footer className='flex gap-4 justify-center'>
          <AuthSocialButton
            icon={BsGithub}
            onClick={() => socialAction('github')}
          />
          <AuthSocialButton
            icon={BsGoogle}
            onClick={() => socialAction('google')}
          />
        </footer>
      </form>
    </section>
  );
};

export default AuthForm;
