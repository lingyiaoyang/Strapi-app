import styled from '@emotion/styled';
// import './card.css';
import React from 'react';
import Link from 'next/link';
import {
	CardText,
	Card,
	CardImg,
	CardBody,
	CardTitle,
	Button,
} from 'reactstrap';

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
					<CardImg
						className='card-img'
						top
						width='100%'
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

export default Card_Movie;
