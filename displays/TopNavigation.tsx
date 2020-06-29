import SiteLogo from '../components/SiteLogo';
import NavbarLink from '../components/NavbarLink';

import style from './TopNavigation.module.css';

const elements = [
  { to: '/modules', text: 'Modules' },
  { to: '/learn', text: 'Learn' },
  { to: '/blog', text: 'Blog' },
  { to: '/about', text: 'About' },
];

const links = elements.map((e) => (
  <span style={{ marginLeft: '1.5em' }} key={e.text}>
    <NavbarLink to={e.to}>{e.text}</NavbarLink>
  </span>
));

const TopNavigation = (): JSX.Element => (
  <div className={style.navigation}>
    <SiteLogo size={1.5} />

    <ul>{links}</ul>
  </div>
);

export default TopNavigation;
