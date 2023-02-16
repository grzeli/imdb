'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchTerm) {
      return;
    }

    router.push(`/search/${searchTerm}`);
  };

  return (
    <form
      className='flex justify-between max-w-6xl mx-auto items-center px-3'
      onSubmit={handleSubmit}
    >
      <input
        type={'text'}
        className={'w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent'}
        placeholder={'Search keywords...'}
        name={'searchBar'}
        id={'searchBar'}
        value={searchTerm}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value)}
      />
      <button
        type={'submit'}
        className={'text-amber-500 disabled:text-gray-400 disabled:cursor-not-allowed '}
        disabled={!searchTerm}
      >
        Search
      </button>
    </form>
  );
}
