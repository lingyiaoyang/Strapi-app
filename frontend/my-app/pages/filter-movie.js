import React from 'react';
import { getServerSideProps } from './movies/[genre]/[slug]';
import { Box, Flex } from 'reflexbox';

function FilterMovie({ movies }) {
  return (
    <>
      <div>
        {movies.map((movies) => {
          return (
            <Box key={movies.id}>
              <h4>{movies.Movie}</h4> -
              {movies.genre ? movies.genre.title : null}
              <br />
              {movie}
            </Box>
          );
        })}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const { API_URI } = process.env;

  const res = await fetch(`${API_URL}/movies`);
  const data = await res.json();

  return {
    props: {
      movies: data,
    },
  };
}

export default FilterMovie;
