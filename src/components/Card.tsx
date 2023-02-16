import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MovieT } from './Results';
import { HiThumbUp as ThumbUp } from 'react-icons/hi';

export default function Card({ result }: { result: MovieT }) {
  return (
    <div className='cursor-pointer sm:hover:shadow-gray-400 shadow-md rounded-2xl mb-8 sm:m-2 transition-shadow duration-200 group pb-2'>
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
          width={500}
          height={300}
          alt={'image not available'}
          className='sm:h-[150px] object-cover max-h-[300px] rounded-t-2xl group-hover:opacity-80 transition-opacity duration-200 -mt-[1px] -mx-[1px] max-w-[calc(100%+2px) w-[calc(100%+2px)] shadow-sm shadow-zinc-300'
          placeholder='blur'
          blurDataURL='/spinner.svg'
        ></Image>
        <div className='p-2'>
          <p className='line-clamp-2 text-md mb-2'>{result.overview}</p>
          <h2 className='truncate text-lg font-semibold'>{result.title || result.name}</h2>
          <p className='text-sm flex items-center'>
            {result.release_date || result.first_air_date}
            <ThumbUp className='h-5 mr-0.5 ml-3' /> {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
