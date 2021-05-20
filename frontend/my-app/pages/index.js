import React from 'react';
import styled from '@emotion/styled';
import Card from '../component/Card';
import { Flex, Box } from 'reflexbox';

const index = (props) => {
  console.log(props);
  return (
    <CardFlex>
      {props.movies.map((movie) => {
        return (
          <Box
            width={['320px', '300px', '250px', '230px', '200px']}
            key={movie.id}
          >
            <Card movie={movie} />
          </Box>
        );
      })}
    </CardFlex>
  );
};

const CardFlex = styled.div`
  display: flex;
  /* width: 100%; */
  flex-wrap: wrap;
  justify-content: space-around;
  border: 3px solid black;
  /* align-items: center; */
  margin: 10px;
  /* width: 200px; */
  /* margin: 0 15px; */
`;

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

export default index;
