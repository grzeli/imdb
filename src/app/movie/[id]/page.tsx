import { MovieT } from '@/components/Results';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import Image from 'next/image';
import React from 'react';

async function getMovie(movieId: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=en-US`
  );
  return await res.json();
}

export default async function MoviePage({ params }: Params) {
  const movie: MovieT = await getMovie(params.id);

  return (
    <div className='w-full sm:grid sm:grid-cols-2 md:pt-8 max-w-6xl mx-auto p-4'>
      <div className='sm:mr-2'>
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
          width={500}
          height={300}
          alt={'movie poster'}
          className='rounded-2xl shadow-md shadow-gray-400 object-cover'
          placeholder='blur'
          blurDataURL='/spinner.svg'
          style={{ maxWidth: '100%', height: '100%' }}
        ></Image>
      </div>
      <div className='p-2'>
        <h2 className='text-lg mb-3 font-bold'>
          {movie.title || movie.name || movie.original_title}
        </h2>
        <p className='text-lg mb-3'>
          <span className='font-semibold mr-1'>Overview:</span>
          {movie.overview}
        </p>
        <p className='mb-3'>
          <span className='font-semibold mr-1'>Release Date:</span>
          {movie.release_date || movie.first_air_date}
        </p>
        <p className='mb-3'>
          <span className='font-semibold mr-1'>Rating:</span>
          {movie.vote_average && movie.vote_average.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
