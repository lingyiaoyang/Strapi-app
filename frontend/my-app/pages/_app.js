// import '../styles/globals.css';
import Header from '../component/Header';
import { useRouter } from 'next/router';
import Navigation from '../component/Navigation';
import { jsx, ThemeProvider } from '@emotion/react';
import GlobalStyles from '../component/GlobalStyles/GlobalStyles';
import 'bootstrap/dist/css/bootstrap.min.css';
import theme from '../theme/theme';
import styled from '@emotion/styled';
import getConfig from 'next/config';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import { parseCookies } from 'nookies';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();
const { publicRuntimeConfig } = getConfig();

const MyApp = ({ Component, pageProps, navigation }) => {
  const router = useRouter();
  // console.log(
  //   '🚀 -> file: _app.js -> line 19 -> MyApp -> pageProps',
  //   pageProps
  // );
  // console.log(navigation);
  // if (!isLogin) {
  //   router.push('/login');
  // }

  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {/* <Header /> */}
        <Navigation navigations={navigation} />
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
};

MyApp.getInitialProps = async ({ ctx }) => {
  //-----------fetch the navigation--------------//
  let navigation = [];
  const res = await fetch(`${publicRuntimeConfig.API_URL}/navigations`);
  navigation = await res.json();

  return { navigation };
};
// MyApp.getInitialProps = async ({ Component, ctx }) => {
//   console.log(
//     '🚀 -> file: _app.js -> line 74 -> MyApp.getInitialProps= -> ctx',
//     ctx.pathname
//   );

//   const res = await fetch(`${publicRuntimeConfig.API_URL}/navigations`);
//   const j = await res.json();
// console.log(
//   '🚀 -> file: _app.js -> line 77 -> MyApp.getInitialProps= -> j',
//   j
// );
//   let isLogin = false;
//   const jwt = parseCookies(ctx).jwt;
//   if (!jwt) {
//     if (ctx.pathname === '/payed-articles') {
//       isLogin = false;
//     }
//   } else {
//     isLogin = true;
//   }

//   const pageProps = Component.getInitialProps
//     ? await Component.getInitialProps(ctx)
//     : {};

//   if (ctx.pathname === '/payed-articles') {
//     redirectUser(ctx, '/login');
//   }

//   return { navigation: j, pageProps, isLogin: isLogin };
// };

export default MyApp;
