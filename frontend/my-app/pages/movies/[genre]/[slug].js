import React from 'react';
// import MyApp from "../../_app";
// import getInitialProps from 'next/config';
// import { publicRuntimeConfig } from "../../next.config";
import getConfig from 'next/config';
import { NextSeo } from 'next-seo';

function Movie({ movie }) {
  console.log(movie);
  const SEO = {
    title: `My Movie | ${movie.Movie}`,
  };

  return (
    <>
      <NextSeo {...SEO} />
      <div className='m-4'>
        <h4>{movie.Movie}</h4>
        <p>{movie.Description}</p>
        <div>{movie.id}</div>

        <ul>
          {/* {movie.map((movie) => {
					return <li>{movie.catergories.id}</li>;
				})} */}
        </ul>
      </div>
    </>
  );
}

const { publicRuntimeConfig } = getConfig();

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const res = await fetch(`${publicRuntimeConfig.API_URL}/movies?slug=${slug}`);

  const data = await res.json();

  return {
    props: {
      movie: data[0],
    },
  };
}

export default Movie;
