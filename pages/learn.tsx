import Head from 'next/head'

import RegularLayout from '../displays/RegularLayout'

// The learning center references a few tutorials that explains how to use
// Dessert
// We could do things similar to the blog but its actually easier to just
// write static pages using MDX
// For more information about MDX see
// https://mdxjs.com/

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
