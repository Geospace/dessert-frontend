import Head from 'next/head';

import TopNavigation from './TopNavigation';
import Footer from './Footer';

import style from './RegularLayout.module.css';

interface Props {
  children: React.ReactNode;
}

const RegularLayout = ({ children }: Props): JSX.Element => (
  <div className={style.layout}>
    <Head>
      <link rel="shortcut icon" href="favicon.png" />
    </Head>
    <TopNavigation />
    {children}
    <Footer />
  </div>
);

export default RegularLayout;
