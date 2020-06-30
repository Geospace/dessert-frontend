import Head from 'next/head';
import RegularLayout from '../displays/RegularLayout';

const Index = (): JSX.Element => (
  <>
    <Head>
      <title>Modules</title>
    </Head>

    <RegularLayout>
      <p>This is the modules page...</p>
    </RegularLayout>
  </>
);

export default Index;
