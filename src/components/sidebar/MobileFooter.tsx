'use client'

import useConversation from '@/hooks/useConversation';
import useRoutes from '@/hooks/useRoutes';
import React from 'react';
import MobileItem from './MobileItem';

const MobileFooter = () => {
  const routes = useRoutes();
  const { isOpen } = useConversation();

  if (isOpen) {
    return null;
  }

  return <div className='
  relative
  justify-between
  w-full
  bottom-0
  z-40
  flex
  items-center
  bg-white
  border-b-[1px]
  border-l-[1px]
  border-r-[1px]
  rounded-b-lg
  xl:hidden
  '>
    {
      routes.map((route)=>(
        <MobileItem
        key={route.href}
        href={route.href}
        active={route.active}
        icon={route.icon}
        onClick={route.onClick}
        />
      ))
    }
  </div>;
};

export default MobileFooter;