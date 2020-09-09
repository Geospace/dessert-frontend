import Head from "next/head"

import RegularLayout from "./RegularLayout"

const Redirecting = (): JSX.Element => (
  <>
    <Head>
      <title>Redirecting...</title>
    </Head>

    <RegularLayout>
      <p>Redirecting...</p>
    </RegularLayout>
  </>
)

export default Redirecting
