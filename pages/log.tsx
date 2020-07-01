import Head from 'next/head';

import RegularLayout from '../displays/RegularLayout';
import LogIn from '../displays/LogIn';
import ThinTitle from '../components/ThinTitle';

const Index = (): JSX.Element => (
  <>
    <Head>
      <title>Log In</title>
    </Head>

    <RegularLayout footer={false}>
      <div style={{ textAlign: 'center', marginTop: '8%' }}>
        <ThinTitle size={1.5}>Log In to Dessert</ThinTitle>
      </div>
      <LogIn />
    </RegularLayout>
  </>
);

export default Index;
