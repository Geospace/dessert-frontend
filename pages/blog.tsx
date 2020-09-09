import Head from "next/head"

import RegularLayout from "../displays/RegularLayout"

const Index = (): JSX.Element => (
  <>
    <Head>
      <title>Blog</title>
    </Head>

    <RegularLayout>
      <p>This is the blog...</p>
    </RegularLayout>
  </>
)

export default Index
