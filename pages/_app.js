import React from 'react';
import App, { Container } from 'next/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from '../config';
import { defaultTheme } from '../components/config.default';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
}
`;
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <ThemeProvider theme={{ ...defaultTheme, theme }}>
          <React.Fragment>
            <Component {...pageProps} />
            <GlobalStyle />
          </React.Fragment>
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
