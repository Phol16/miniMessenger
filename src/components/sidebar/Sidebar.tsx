import React from 'react';
import DesktopSidebar from './DesktopSidebar';
import MobileFooter from './MobileFooter';
import getCurrentUser from '@/app/actions/getCurrentUser';

async function Sidebar({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser();
  
  return (
    <div className='h-full'>
      <DesktopSidebar currentUser={currentUser!}/>
      <div className='h-full'>{children}</div>
      <MobileFooter/>
    </div>
  );
}

export default Sidebar;
