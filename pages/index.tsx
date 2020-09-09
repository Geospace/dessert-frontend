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
          padding: "2em 0",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        🎤 We want to hear from you! Take our{" "}
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfD-PXG2-rTbvAc42vAF6oPt5nI8L8yaCEsWDxUb6NM46h5_Q/viewform">
          5 minutes survey
        </a>
        !
      </div>

      <div
        style={{
          textAlign: "center",
          paddingTop: "1em",
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
