import 'normalize.css'
import 'react-toastify/dist/ReactToastify.css'
import 'github-markdown-css'

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink
} from '@apollo/client'
import MobileDetect from 'mobile-detect'
import App, { AppContext, AppInitialProps } from 'next/app'
import {
  ScreenClass,
  ScreenClassProvider,
  setConfiguration
} from 'react-grid-system'
import { ToastContainer } from 'react-toastify'

import Theme from '../displays/Theme'

// This is NOT an actual page. See Next.js documentation for more
// information on this file:
// https://nextjs.org/docs/advanced-features/custom-app

// See below for more information
interface Props {
  screenClass: ScreenClass
}

// Back-end GraphQL endpoint
// We have a cookie based authentication
const link = createHttpLink({
  uri: 'https://prod.dessert.vodka/',
  credentials: 'include'
})

// Apollo is a GraphQL client for React. It offers a hooks-based API
// so each component is responsible for its own queries.
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
})

// Declaring a custom `App` in Next.js allows to tweak page generation
// seettings. In our case it is needed to configure our react-grid-system.
class MyApp extends App {
  static getInitialProps = async ({
    ctx
  }: AppContext): Promise<AppInitialProps> => {
    let userAgent = ''
    if (process.browser) {
      userAgent = navigator.userAgent
    } else {
      userAgent = ctx?.req?.headers['user-agent'] ?? ''
    }

    // We try to guess the correct screen class
    const md = new MobileDetect(userAgent)

    let screenClass = 'xl'
    if (md.phone() !== null) {
      screenClass = 'xs'
    }
    if (md.tablet() !== null) {
      screenClass = 'md'
    }

    return { pageProps: { screenClass } }
  }

  render (): JSX.Element {
    const { Component, pageProps } = this.props
    const { screenClass } = pageProps as Props

    // All this fuss to make sure that we get the correct screen class
    // when generating the page server side
    // This disable automatic static generation for all our pages
    setConfiguration({ defaultScreenClass: screenClass })

    return (
      <Theme>
        <ApolloProvider client={client}>
          <ScreenClassProvider>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...pageProps} />
            <ToastContainer position='bottom-center' />
          </ScreenClassProvider>
        </ApolloProvider>
      </Theme>
    )
  }
}

export default MyApp
