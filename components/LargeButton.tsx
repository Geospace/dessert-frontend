import styles from './LargeButton.module.css';

interface Props {
  children: string;
}

const LargeButton = ({ children }: Props): JSX.Element => (
  <div className={styles.button}>{children}</div>
);

export default LargeButton;
