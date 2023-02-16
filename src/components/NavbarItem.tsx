'use client';
import Link from 'next/link';
import React from 'react';
import { useSearchParams } from 'next/navigation';

type PropsT = {
  title: string;
  param: string;
};

export const NavbarItem: React.FC<PropsT> = ({ title, param }) => {
  const params = useSearchParams();
  const genre = params.get('genre');

  return (
    <div>
      <Link
        href={`/?genre=${param}`}
        // eslint-disable-next-line prettier/prettier
        className={`hover:text-amber-600 font-semibold p-2 m-1 ${genre &&
          genre === param &&
          'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg'
          // eslint-disable-next-line prettier/prettier
          }`}
      >
        {title}
      </Link>
    </div>
  );
};
