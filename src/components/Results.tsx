import React from 'react';

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
};

export const Results = ({ results }: { results: MovieT[] }) => {
  return (
    <div>
      {results.map((result: MovieT) => (
        <div key={result.id}>
          {result.title}({result.original_title})
        </div>
      ))}
    </div>
  );
};
