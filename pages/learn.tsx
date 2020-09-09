import Head from "next/head"

import RegularLayout from "../displays/RegularLayout"

const Index = (): JSX.Element => (
  <>
    <Head>
      <title>Learning Center</title>
    </Head>

    <RegularLayout>
      <p>This is the learning center...</p>
    </RegularLayout>
  </>
)

export default Index
