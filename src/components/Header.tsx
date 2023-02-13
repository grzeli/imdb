import React from 'react';
import MenuItem from './MenuItem';
import { ImHome as HomeIcon } from 'react-icons/Im';
import { BsInfoCircleFill as AboutIcon } from 'react-icons/bs';
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';

export default function Header() {
  return (
    <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6'>
      <div className='flex'>
        <MenuItem title={'Home'} address={'/'} Icon={HomeIcon} />
        <MenuItem title={'About'} address={'/about'} Icon={AboutIcon} />
      </div>
      <div className='flex items-center space-x-5'>
        <DarkModeSwitch />
        <Link href='/'>
          <h2 className='text-2xl'>
            <span className='font-bold bg-amber-500 py-1 px-2 rounded-xl mr-1 shadow-md'>IMDb</span>
            <span className='text-xl hidden sm:inline'>Clone</span>
          </h2>
        </Link>
      </div>
      {/* <div className=''></div> */}
    </div>
  );
}
