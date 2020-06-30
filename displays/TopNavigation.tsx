import { Hidden } from 'react-grid-system';

import SiteLogo from '../components/SiteLogo';
import NavbarLink from '../components/NavbarLink';

import style from './TopNavigation.module.css';
import { useRouter } from 'next/dist/client/router';

const elements = [
  { to: '/modules', text: 'Modules' },
  { to: '/learn', text: 'Learn' },
  { to: '/blog', text: 'Blog' },
  { to: '/about', text: 'About' },
];

const TopNavigation = (): JSX.Element => {
  const router = useRouter();

  const links = elements.map((e) => (
    <span style={{ marginLeft: '1.5em' }} key={e.text}>
      <NavbarLink active={router.pathname === e.to} to={e.to}>
        {e.text}
      </NavbarLink>
    </span>
  ));

  return (
    <div className={style.navigation}>
      <SiteLogo size={1.5} />

      <Hidden xs sm>
        <ul>{links}</ul>
      </Hidden>
    </div>
  );
};

export default TopNavigation;
