import Image from 'next/image';
import React from 'react';
import logo from '../../public/logo.png'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-8 max-w-6xl m-auto'>
      <Image
        src={logo}
        alt='MessengerLogo'
        width={40}
        height={0}
        className='h-auto'
      />
    </div>
  );
};

export default Navbar;
