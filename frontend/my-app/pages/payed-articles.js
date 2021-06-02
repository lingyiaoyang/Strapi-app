import React from 'react';
import { parseCookies } from 'nookies';
import getConfig from 'next/config';

function payed_articles({ articles }) {
  return (
    <div>
      <div>
        this is payed articles
        {/* {articles.map((articles) => {
          return (
            <div key={articles.id}>
              <h3>{articles.Authenticated}</h3>
              <p>{articles.Description}</p>
              <p>{articles.Description}</p>
            </div>
          );
        })} */}
      </div>
    </div>
  );
}

export default payed_articles;
