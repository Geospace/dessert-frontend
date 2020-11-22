import Head from 'next/head'

import RegularLayout from '../../displays/RegularLayout'

const Index = (): JSX.Element => (
  <>
    <Head>
      <title>Meet the new Blog!</title>
    </Head>

    <RegularLayout maxWidth='42em'>
      <h2>Meet the new Blog!</h2>

      <p style={{ opacity: '60%' }}>Published 20/09/10</p>

      <p>
        The Dessert team is proud to announce its new blog. Built from the
        ground up, it matches our visual identity.
      </p>

      <p>
        Also, this blog is statically generated at runtime... Better performance
        for our users!
      </p>

      <p>We hope you will like it!</p>
    </RegularLayout>
  </>
)

export default Index
