import Head from 'next/head'

import RegularLayout from '../displays/RegularLayout'

// The about page gives general explanation about Dessert, who the team is,
// what our goal is...

const Index = (): JSX.Element => (
  <>
    <Head>
      <title>About</title>
    </Head>

    <RegularLayout>
      <p>This is the about page...</p>
    </RegularLayout>
  </>
)

export default Index
