import { useRouter } from 'next/dist/client/router';
import { Hidden, Visible } from 'react-grid-system';

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

const LoginSignup = (): JSX.Element => (
  <div className={styles.right}>
    <a href="/log">Log In</a>
    <span className={styles.sign}>
      <PrimaryButton to="sign">Sign Up</PrimaryButton>
    </span>
  </div>
);

const TopNavigation = (): JSX.Element => {
  const router = useRouter();

  const links = elements.map((e, k) => (
    <span style={{ marginLeft: k ? '1.5em' : 'none' }} key={e.text}>
      <NavbarLink active={router.pathname === e.to} to={e.to}>
        {e.text}
      </NavbarLink>
    </span>
  ));

  return (
    <>
      <div className={styles.navigation}>
        <SiteLogo size={1.5} />

        <Hidden xs>
          <div className={styles.group}>
            <ul className={styles.links}>{links}</ul>
            <LoginSignup />
          </div>
        </Hidden>

        <Visible xs>
          <LoginSignup />
        </Visible>
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
