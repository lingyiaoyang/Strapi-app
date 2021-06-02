import React, { useState } from 'react';
import Styled from '@emotion/styled';
import { setCookie } from 'nookies';
import Router from 'next/router';

const { API_URL } = process.env;

function login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //----------this is button handle login information---------//
  async function handleLogin() {
    // ---------creating a login info----------//
    const loginInfo = {
      identifier: username,
      password: password,
    };

    //--------------fetching the data and stringify it------//
    const login = await fetch(`${API_URL}/auth/local`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginInfo),
    });

    //-------return login as a json---------//
    const loginResponse = await login.json();

    setCookie(null, 'jwt', loginResponse.jwt, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });

    Router.push('/payed-articles');
    console.log(loginResponse);
  }

  return (
    <>
      <FormHandle>
        <div>this is login page</div>
        <input
          type='email'
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <br />
        <input
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br />
        <button type='button' onClick={() => handleLogin()}>
          Login
        </button>
      </FormHandle>
    </>
  );
}

const FormHandle = Styled.form`
  margin:10px;
`;

export default login;
