import Head from 'next/head';

import RegularLayout from '../displays/RegularLayout';

const Index = (): JSX.Element => (
  <>
    <Head>
      <title>About</title>
    </Head>

    <RegularLayout>
      <p>This is the about page...</p>
    </RegularLayout>
  </>
);

export default Index;
