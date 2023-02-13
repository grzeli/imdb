import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons/lib/esm/iconBase';

type PropsT = {
  title: string;
  address: string;
  Icon: IconType;
};

const MenuItem: React.FC<PropsT> = ({ title, address, Icon }) => {
  return (
    <div>
      <Link href={address} className={'mx-4 lg:mx-6 hover:text-amber-600'}>
        <Icon className='text-2xl sm:hidden mx-4' />
        <p className='hidden sm:inline my-2 text-sm'>{title}</p>
      </Link>
    </div>
  );
};

export default MenuItem;
