// import '../styles/globals.css';
import Header from '../component/Header';
import Navigation from '../component/Navigation';
import { jsx, ThemeProvider } from '@emotion/react';
import GlobalStyles from '../component/GlobalStyles/GlobalStyles';
import 'bootstrap/dist/css/bootstrap.min.css';
import theme from '../theme/theme';
import styled from '@emotion/styled';
import getConfig from 'next/config';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps, navigation }) => {
  // console.log(navigation);

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

const { publicRuntimeConfig } = getConfig();

MyApp.getInitialProps = async () => {
  const res = await fetch(`${publicRuntimeConfig.API_URL}/navigations`);
  const navigation = await res.json();

  return { navigation };
};

export default MyApp;
