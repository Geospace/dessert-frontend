import Head from 'next/head'

import RegularLayout from './RegularLayout'

// Same logic as the Loading component

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
