import Head from "next/head"

import BigOutlineButton from "../components/BigOutlineButton"
import SiteLogo from "../components/SiteLogo"
import IntroGrid from "../displays/IntroGrid"
import IntroText from "../displays/IntroText"
import RegularLayout from "../displays/RegularLayout"

const Index = (): JSX.Element => (
  <>
    <Head>
      <title>Dessert</title>
    </Head>

    <RegularLayout>
      <div
        style={{
          textAlign: "center",
          paddingTop: "4em",
          marginBottom: "4em",
        }}
      >
        <SiteLogo size={4} />
      </div>

      <div
        style={{
          maxWidth: "32em",
          margin: "0 auto",
          marginBottom: "4em",
        }}
      >
        <IntroText>
          Dessert helps you transition from JavaScript to WebAssemly. We provide
          drop-in replacements for the modules you are already using and that
          slow down your application.
        </IntroText>
      </div>

      <div
        style={{
          maxWidth: "32em",
          margin: "0 auto",
          marginBottom: "3em",
        }}
      >
        <IntroGrid />
      </div>

      <div
        style={{
          maxWidth: "28em",
          margin: "0 auto",
          marginBottom: "4em",
        }}
      >
        <IntroText>
          Boost your application&apos;s performance and get ready for the web of
          tomorrow.
        </IntroText>
      </div>

      <div style={{ textAlign: "center", marginBottom: "4em" }}>
        <BigOutlineButton to="/signup">Get Started →</BigOutlineButton>
      </div>
    </RegularLayout>
  </>
)

export default Index
