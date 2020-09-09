import Head from "next/head"

import RegularLayout from "./RegularLayout"

const Loading = (): JSX.Element => (
  <>
    <Head>
      <title>Loading...</title>
    </Head>

    <RegularLayout>
      <p>Loading...</p>
    </RegularLayout>
  </>
)

export default Loading
