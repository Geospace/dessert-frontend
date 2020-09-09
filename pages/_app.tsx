import "normalize.css"
import "react-toastify/dist/ReactToastify.css"
import "github-markdown-css"

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client"
import MobileDetect from "mobile-detect"
import App, { AppContext, AppInitialProps } from "next/app"
import {
  ScreenClass,
  ScreenClassProvider,
  setConfiguration,
} from "react-grid-system"
import { ToastContainer } from "react-toastify"

import Theme from "../displays/Theme"

interface Props {
  screenClass: ScreenClass
}

const link = createHttpLink({
  uri: "https://prod.dessert.vodka/",
  credentials: "include",
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
})

class MyApp extends App {
  static getInitialProps = async ({
    ctx,
  }: AppContext): Promise<AppInitialProps> => {
    let userAgent = ""
    if (process.browser) {
      userAgent = navigator.userAgent
    } else {
      userAgent = ctx?.req?.headers["user-agent"] || ""
    }

    const md = new MobileDetect(userAgent)

    let screenClass = "xl"
    if (md.phone() !== null) {
      screenClass = "xs"
    }
    if (md.tablet() !== null) {
      screenClass = "md"
    }

    return { pageProps: { screenClass } }
  }

  render(): JSX.Element {
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
            <ToastContainer position="bottom-center" />
          </ScreenClassProvider>
        </ApolloProvider>
      </Theme>
    )
  }
}

export default MyApp
