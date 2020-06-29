import React from 'react';
import App from 'next/app';
import { ScreenClassProvider } from 'react-grid-system';

import 'normalize.css';
import Theme from '../displays/Theme';

class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;
    return (
      <Theme>
        <ScreenClassProvider>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </ScreenClassProvider>
      </Theme>
    );
  }
}

export default MyApp;
