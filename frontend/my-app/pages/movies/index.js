import React from 'react';

import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';

const index = ({ movies, page, CountResponse }) => {
	const router = useRouter();
	console.log(CountResponse);

	const lastpage = Math.ceil(CountResponse / 3);

	console.log(router.query);

	console.log(movies);
	return (
		<>
			<ul>
				{movies.map((movie) => {
					return <ul key={movie.id}>{movie.Movie}</ul>;
				})}
			</ul>
			<button
				disabled={page <= 1}
				onClick={() => router.push(`/movies?page=${page - 1}`)}
			>
				Previous page
			</button>
			<button
				disabled={page >= lastpage}
				onClick={() => router.push(`/movies?page=${page + 1}`)}
			>
				Next page
			</button>
		</>
	);
};

export async function getServerSideProps({ query: { page = 1 } }) {
	// console.log(query)
	const { API_URL } = process.env;
	const start = +page === 1 ? 0 : (+page - 1) * 3;

	const res = await fetch(`${API_URL}/movies?_limit=3&_start=${start}`);
	const data = await res.json();
	const Response = await fetch(`${API_URL}/movies/count`);
	const CountResponse = await Response.json();

	return {
		props: {
			movies: data,
			page: +page,
			CountResponse,
		},
	};
}

export default index;
