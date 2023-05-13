import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-8 max-w-6xl m-auto'>
      <Image
        src={`https://scontent.fdvo2-2.fna.fbcdn.net/v/t39.8562-6/120009688_325579128711709_1736249742330805861_n.png?_nc_cat=1&ccb=1-7&_nc_sid=6825c5&_nc_ohc=bVT03qrA8Z4AX-_9SpK&_nc_ht=scontent.fdvo2-2.fna&oh=00_AfA3pebDzMLlioQrHRZYbOu_1fJX7ilIzuFifJXwsiibrA&oe=645E107D`}
        alt='MessengerLogo'
        width={40}
        height={0}
        className='h-auto'
      />
    </div>
  );
};

export default Navbar;
