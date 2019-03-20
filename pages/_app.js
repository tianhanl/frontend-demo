import React from 'react';
import App, { Container } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '../config';
import { defaultTheme } from '../components/config.default';
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
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
