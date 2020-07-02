import { useRouter } from 'next/dist/client/router';
import { Hidden, Visible } from 'react-grid-system';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import SiteLogo from '../components/SiteLogo';
import NavbarLink from '../components/NavbarLink';
import PrimaryButton from '../components/PrimaryButton';

import styles from './TopNavigation.module.css';

const elements = [
  { to: '/modules', text: 'Modules' },
  { to: '/learn', text: 'Learn' },
  { to: '/blog', text: 'Blog' },
  { to: '/about', text: 'About' },
];

const ProfilePic = (): JSX.Element => (
  <Link href="/log">
    <a>
      <div
        style={{
          background: '#aaa',
          marginLeft: '2em',
          borderRadius: '100%',
          height: '2.2em',
          width: '2.2em',
        }}
      />
    </a>
  </Link>
);

const LoginSignup = (): JSX.Element => (
  <div className={styles.right}>
    <Link href="/log">
      <a>Log In</a>
    </Link>

    <span className={styles.sign}>
      <PrimaryButton to="sign">Sign Up</PrimaryButton>
    </span>
  </div>
);

const TopNavigation = (): JSX.Element => {
  const router = useRouter();
  const [isConnected, setConnected] = useState(false);

  const links = elements.map((e, k) => (
    <span style={{ marginLeft: k ? '1.5em' : 'none' }} key={e.text}>
      <NavbarLink active={router.pathname === e.to} to={e.to}>
        {e.text}
      </NavbarLink>
    </span>
  ));

  useEffect(() => {
    setConnected(localStorage.getItem('connected') === 'yes');
  }, []);

  return (
    <>
      <div className={styles.navigation}>
        <SiteLogo size={1.5} />

        <Hidden xs>
          <div className={styles.group}>
            <ul className={styles.links}>{links}</ul>
            {isConnected ? <ProfilePic /> : <LoginSignup />}
          </div>
        </Hidden>

        <Visible xs>{isConnected ? <ProfilePic /> : <LoginSignup />}</Visible>
      </div>

      <Visible xs>
        <div className={styles.navigationMobile}>
          <ul className={styles.links}>{links}</ul>
        </div>
      </Visible>
    </>
  );
};

export default TopNavigation;
