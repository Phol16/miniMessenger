import React from 'react'
import {IconType} from 'react-icons'

interface AuthSocialButtonProps {
  icon:IconType,
  onClick:()=>void
}

const AuthSocialButton = ({icon:Icon, onClick}:AuthSocialButtonProps) => {
  return (
    <button
    type='button'
    onClick={onClick}
    className=' border-[1px] px-5 py-2 rounded-lg text-gray-700 hover:bg-sky-500 hover:text-white'
    >
      <Icon/>
    </button>
  )
}

export default AuthSocialButton