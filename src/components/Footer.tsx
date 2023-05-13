import React from 'react';

const Footer = () => {
  return (
    <main className='absolute bottom-0 w-full'>
      <div className=' w-full max-w-7xl m-auto flex gap-2 justify-center p-5'>
        <h1 className='font-bold'>© Mini Messenger.</h1>
        <p className='hidden lg:flex'>The Apple and Google Play logos are trademarks of their respective owners.</p>
      </div>
    </main>
  );
};

export default Footer;
