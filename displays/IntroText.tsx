import styles from './IntroText.module.css';

interface Props {
  children: string;
}

const IntroText = ({ children }: Props): JSX.Element => (
  <div className={styles.wrapper}>
    <p className={styles.text}>{children}</p>
  </div>
);

export default IntroText;
