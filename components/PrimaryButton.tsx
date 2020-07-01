import styles from './PrimaryButton.module.css';

interface Props {
  to: string;
  children: string;
}

const PrimaryButton = ({ to, children }: Props): JSX.Element => (
  <a className={styles.button} href={to}>
    {children}
  </a>
);

export default PrimaryButton;
