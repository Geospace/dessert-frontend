import Head from 'next/head';

import TopNavigation from './TopNavigation';
import Footer from './Footer';

import style from './RegularLayout.module.css';

interface Props {
  children: React.ReactNode;
  footer?: boolean;
}

const RegularLayout = ({ children, footer }: Props): JSX.Element => (
  <div className={style.layout}>
    <Head>
      <link rel="shortcut icon" href="favicon.png" />
    </Head>
    <TopNavigation />
    {children}
    {footer && <Footer />}
  </div>
);

RegularLayout.defaultProps = {
  footer: true,
};

export default RegularLayout;
