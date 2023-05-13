'use client';

import React from 'react';
import clsx from 'clsx';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
}

const Input = ({
  label,
  id,
  type,
  required,
  register,
  errors,
  disabled,
}: InputProps) => {
  return (
    <div>
      <label htmlFor={id} className='text-sm'>{label}</label>
      <div>
        <input
          id={id}
          type={type}
          autoComplete={id}
          disabled={disabled}
          placeholder={label}
          {...register(id, { required })}
          // className='md:w-80 p-2 rounded-md bg-zinc-200 focus:outline-blue-600'
          className={clsx(
            `
          form-input
          block
          w-full
          rounded-md
          border-0
          py-1.5
          text-gray-900
          shadow-sm
          ring-1
          ring-inset
          ring-gray-300
          placeholder:text-gray-400
          focus:ring-2
          focus:ring-inset
          focus:ring-sky-600
          sm:text-sm
          sm:leading-6
          `,
            errors[id] && 'focus:ring-rose-500',
            disabled && 'opacity-50 cursor-default'
          )}
        />
      </div>
    </div>
  );
};

export default Input;
