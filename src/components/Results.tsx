import React from 'react';
import Card from './Card';

export type MovieT = {
  poster_path?: string | null;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  genre_ids?: number[];
  id?: number;
  original_title?: string;
  original_language?: string;
  title?: string;
  backdrop_path?: string;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average?: number;
  name?: string;
  first_air_date?: string;
};

export const Results = ({ results }: { results: MovieT[] }) => {
  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4'>
      {results && results.map((result: MovieT) => <Card key={result.id} result={result} />)}
    </div>
  );
};
