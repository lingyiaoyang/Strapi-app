import React, { useState } from 'react';
import { parseCookies } from 'nookies';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

function add_movie() {
  const [movieTitle, setMovieTitle] = useState('');
  const [movieSlug, setMovieSlug] = useState('');

  async function add_Movie() {
    // const jwt = parseCookies().jwt;

    const movieInfo = {
      Movie: movieTitle,
      slug: movieSlug,
    };

    const add = await fetch(`${publicRuntimeConfig.API_URL}/movies`, {
      method: 'POST',
      body: JSON.stringify(movieInfo),
    });

    const addResponse = await add.json();
    console.log(
      '🚀 -> file: add-movie.js -> line 30 -> add_Movie -> addResponse',
      addResponse
    );
  }

  return (
    <div>
      <div>this is add movie</div>
      <input
        type='text'
        onChange={(e) => setMovieTitle(e.target.value)}
        placeholder='Movie title'
      />
      <br />
      <input
        type='text'
        onChange={(e) => setMovieSlug(e.target.value)}
        placeholder='Movie slug'
      />
      <br />
      <button type='button' onClick={() => add_Movie()}>
        Add Movie
      </button>
    </div>
  );
}

export default add_movie;
