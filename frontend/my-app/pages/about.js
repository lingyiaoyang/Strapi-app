import React from 'react';
import { NextSeo } from 'next-seo';
// import '../styles/about.css';

const about = () => {
  const SEO = {
    title: 'About page',
  };

  return (
    <>
      <NextSeo {...SEO} />
      <div className='about'>this is about</div>
    </>
  );
};

export default about;
