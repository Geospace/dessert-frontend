import Head from 'next/head'

import RegularLayout from '../../displays/RegularLayout'

const Index = (): JSX.Element => (
  <>
    <Head>
      <title>Meet the new Web Application!</title>
    </Head>

    <RegularLayout maxWidth='42em'>
      <h2>Meet the new Web Application!</h2>

      <p style={{ opacity: '60%' }}>Published 20/09/10</p>

      <p>
        The Dessert team is proud to announce its new web application. Built
        from the ground up, it introduces our new visual identity.
      </p>

      <p>We hope you will like it!</p>
    </RegularLayout>
  </>
)

export default Index
