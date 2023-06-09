'use client';
import { User } from '@prisma/client';
import Image from 'next/image';
import React from 'react';

interface AvatarProps {
  user?: User;
}

const Avatar = ({ user }: AvatarProps) => {
  return (
    <div className='relative flex items-center'>
      <div
        className='
        relative
        inline-block
         rounded-full
         overflow-hidden
         h-9
         w-9
         md:h-11
         md:w-11
     '
      >
        <Image
          src={
            user?.image ||
            'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/768px-Windows_10_Default_Profile_Picture.svg.png'
          }
          alt='Avatar'
          fill
        />
      </div>
      <span
        className='
      absolute
      block
      rounded-full
      bg-green-500
      ring-2
      ring-white
      top-0
      right-0
      h-2
      w-2
      md:h-3
      md:w-3
      '
      />
    </div>
  );
};

export default Avatar;
