import SiteLogo from '../components/SiteLogo';

import style from './Footer.module.css';

const Footer = (): JSX.Element => (
  <div className={style.footer}>
    <p>
      <SiteLogo size={0.9} />, all rights reserved.
    </p>
  </div>
);

export default Footer;
