import { useRouter } from 'next/dist/client/router';

import SiteLogo from '../components/SiteLogo';
import NavbarLink from '../components/NavbarLink';

import style from './TopNavigation.module.css';

const elements = [
  { to: '/modules', text: 'Modules' },
  { to: '/learn', text: 'Learn' },
  { to: '/blog', text: 'Blog' },
  { to: '/about', text: 'About' },
];

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
    <div className={style.navigation}>
      <SiteLogo size={1.5} />

      <ul className={style.links}>{links}</ul>
    </div>
  );
};

export default TopNavigation;
