import Link from 'next/link';

import styles from './PrimaryButton.module.css';

interface Props {
  to: string;
  children: string;
}

const PrimaryButton = ({ to, children }: Props): JSX.Element => (
  <Link href={to}>
    <a className={styles.button}>{children}</a>
  </Link>
);

export default PrimaryButton;
