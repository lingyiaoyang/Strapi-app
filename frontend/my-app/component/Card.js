import styled from '@emotion/styled';
// import './card.css';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  CardText,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
} from 'reactstrap';
import PropTypes from 'prop-types';

function Card_Movie({ movie }) {
  const { API_URL } = process.env;

  if (!movie.genre) {
    movie.genre = {};
    movie.genre = 'uncatergories';
  }

  // if ( !movie.movie_img )
  // {
  // 	movie.movie_img.url = movie.movie_img.id.
  // }

  return (
    <CardStyled>
      <Card className='card '>
        {movie.movie_img && (
          <Image
            className='card-img'
            width={movie.movie_img.width}
            height={movie.movie_img.height}
            src={API_URL + movie.movie_img.url}
            alt='Card image cap'
          />
        )}

        <CardBody>
          <CardTitle>{movie.Movie}</CardTitle>
          <CardText>{movie.Description}</CardText>
          <Link
            href='/movies/[genre]/[slug]'
            as={`/movies/${movie.genre.title}/${movie.slug}`}
          >
            Learn more about movie
          </Link>
        </CardBody>
      </Card>
      {/* <Button>Test</Button> */}
    </CardStyled>
  );
}

// const Button = styled.button`
// 	border: 1px solid red;
// `;

const CardStyled = styled.div`
  border: 2px solid black;
  height: 100%;
  margin: 5px;

  .card {
    height: 100%;
    width: 100%;
    border: 1px solid red;

    .card-img {
      height: 100%;
      width: 100%;
      border: 1px solid red;
    }
  }
`;

// Card_Movie.PropTypes = {
//   movie: PropTypes.object.isRequired,
// };

export default Card_Movie;
