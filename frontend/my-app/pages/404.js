import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFoundPage = () => {
  const Router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      Router.push('/');
    }, 3000);
  }, []);

  return (
    <div>
      <h1>
        Page not found <br />
        we will return to your homepage
      </h1>
    </div>
  );
};

export default NotFoundPage;
