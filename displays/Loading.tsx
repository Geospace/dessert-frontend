import Head from 'next/head'

import RegularLayout from './RegularLayout'

// The loading animation
// Does not do much for now but still we wanted to extract this in a component
// now so that it was easy to improve later on
// TODO Make a better component

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
