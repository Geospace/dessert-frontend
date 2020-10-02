import Head from "next/head"
import { useState } from "react"

import BigOutlineButton from "../components/BigOutlineButton"
import SiteLogo from "../components/SiteLogo"
import IntroGrid from "../displays/IntroGrid"
import IntroText from "../displays/IntroText"
import RegularLayout from "../displays/RegularLayout"

const Index = (): JSX.Element => {
  const [hidden, setHidden] = useState(false)
  return (
    <>
      <Head>
        <title>Dessert</title>
      </Head>

      <RegularLayout>
        <div
          style={{
            maxWidth: "32em",
            margin: "0 auto",
            marginBottom: "4em",
          }}
        >
          <IntroText>
            Dessert helps you transition from JavaScript to WebAssembly. We
            provide drop-in replacements for the modules you are already using
            and that slow down your application.
          </IntroText>

          {!hidden && (
            <a href="#" onClick={() => setHidden((h) => !h)}>
              <div
                style={{
                  margin: "4em 0",
                  height: "300px",
                  border: "solid 1px black",
                }}
              />
            </a>
          )}

          <div style={{ textAlign: "center", marginTop: "4em" }}>
            <BigOutlineButton to="/modules">Get Started →</BigOutlineButton>
          </div>
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
            Boost your application&apos;s performance and get ready for the web
            of tomorrow.
          </IntroText>
        </div>
      </RegularLayout>
    </>
  )
}

export default Index
