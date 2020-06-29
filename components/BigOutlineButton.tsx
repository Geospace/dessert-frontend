import styles from './BigOutlineButton.module.css';

interface Props {
  to: string;
  children: string;
}

const BigOutlineButton = ({ to, children }: Props): JSX.Element => (
  <a href={to} className={styles.button}>
    {children}
  </a>
);

export default BigOutlineButton;
