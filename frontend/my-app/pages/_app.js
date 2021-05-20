// import '../styles/globals.css';
import Header from '../component/Header';
import Navigation from '../component/Navigation';
import { jsx, ThemeProvider } from '@emotion/react';
import GlobalStyles from '../component/GlobalStyles/GlobalStyles';
import 'bootstrap/dist/css/bootstrap.min.css';
import theme from '../theme/theme';
import styled from '@emotion/styled';
import getConfig from 'next/config';

const MyApp = ({ Component, pageProps, navigation }) => {
  // console.log(navigation);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {/* <Header /> */}
        <Navigation navigations={navigation} />
        <Component {...pageProps} />
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
