// import React from 'react';
// // import { getServerSideProps } from './movies/[genre]/[slug]';
// import { Box, Flex } from 'reflexbox';

// function FilterMovie({ movies }) {
//   return (
//     <>
//       <div>
//         {movies.map((movies) => {
//           return (
//             <Box key={movies.id}>
//               <h4>{movies.Movie}</h4> -
//               {/* {movies.genre ? movies.genre.title : null} */}
//               <br />
//               {movies}
//             </Box>
//           );
//         })}
//       </div>
//     </>
//   );
// }

// export async function getServerSideProps() {
//   const { API_URL } = process.env;

//   const res = await fetch(`${API_URL}/movies`);
//   const data = await res.json();

//   return {
//     props: {
//       movies: data,
//     },
//   };
// }

// export default FilterMovie;

import React from 'react';

function filter_movie({ movies }) {
  return (
    <div>
      {movies.map((movies) => {
        return (
          <div
            key={movies.id}
            css={{ margin: '8px', border: '3px solid black', width: '30%' }}
          >
            <h3>{movies.Movie}</h3>
            <p>
              {movies.Description} - {movies.Genre}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps() {
  const { API_URL } = process.env;
  const res = await fetch(`${API_URL}/movies`);
  const data = await res.json();

  return {
    props: {
      movies: data,
    },
  };
}

export default filter_movie;
