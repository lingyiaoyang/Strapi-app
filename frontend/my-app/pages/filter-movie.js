import Select from 'react-select';
import React, { useState } from 'react';
import Styled from '@emotion/styled';
import { useQuery, useQueryClient } from 'react-query';

const { API_URL } = process.env;

// ----------this is getMovies works------------------
const getMovies = async (key) => {
  console.log(key);
  const catergoriesId = key.queryKey[1].catergories.map(
    (id) => `catergories.id=${id}`
  );

  console.log(catergoriesId);

  const catergoriesQueryString = catergoriesId.join('&');
  console.log(catergoriesQueryString);

  if (catergoriesQueryString) {
    const res = await fetch(`${API_URL}/movies?${catergoriesQueryString}`);
    return res.json();
  } else {
    const res = await fetch(`${API_URL}/movies`);
    return res.json();
  }
};

function filter_movie({ movies, catergories }) {
  const queryClient = useQueryClient();
  const [catergoriesId, setCatergoriesId] = useState([]);
  // const handleActors = (values) => {
  //   console.log(values);
  // };

  const { data, status } = useQuery(
    ['movies', { catergories: catergoriesId }],
    getMovies,
    {
      initialData: movies,
    }
  );

  return (
    <div>
      <Select
        getOptionLabel={(option) => `${option.Type}`}
        getOptionValue={(option) => option.id}
        options={catergories}
        instanceId='catergories'
        isMulti
        placeholder='Filter by catergories'
        onChange={(values) =>
          setCatergoriesId(values.map((values) => values.id))
        }
      />
      <FlexCard>
        {status === 'loading' && <div>I am loading your movies</div>}
        {status === 'error' && <div>Something is went wrong</div>}
        {status === 'success' &&
          data.map((movies) => {
            return (
              <div
                key={movies.id}
                css={{
                  width: '32px',
                  margin: '8px',
                  border: '3px solid black',
                  width: '30%',
                }}
              >
                <h3>{movies.Movie}</h3>
                <p>
                  {movies.Description} - {movies.Genre}
                </p>
              </div>
            );
          })}
      </FlexCard>
    </div>
  );
}

const FlexCard = Styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:space-around;

  
`;

export async function getServerSideProps() {
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}/movies`);
  const data = await res.json();

  const resCatergories = await fetch(`${API_URL}/catergories`);
  const dataCatergories = await resCatergories.json();

  return {
    props: {
      // movies: data,
      catergories: dataCatergories,
    },
  };
}

export default filter_movie;
