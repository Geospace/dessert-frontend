import Head from "next/head"

import Footer from "./Footer"
import style from "./RegularLayout.module.css"
import TopNavigation from "./TopNavigation"

// Most pages are wrapped into the component
// General margins and styling are handled here

interface Props {
  children: React.ReactNode
  footer?: boolean
  maxWidth?: string
}

const RegularLayout = ({ children, footer, maxWidth }: Props): JSX.Element => (
  <div className={style.layout}>
    <Head>
      <link rel="shortcut icon" href="favicon.png" />
    </Head>
    <TopNavigation />
    <div style={{ maxWidth }}>{children}</div>
    {footer && <Footer />}
  </div>
)

RegularLayout.defaultProps = {
  footer: true,
  maxWidth: "auto",
}

export default RegularLayout
