import styles from './HeroText.module.css';

interface Props {
  children: string;
  size?: number;
  faded?: boolean;
}

const HeroText = ({ children, faded, size }: Props): JSX.Element => (
  <p
    style={{ fontSize: `${size}em` }}
    className={(faded && styles.colored) || undefined}
  >
    {children}
  </p>
);

HeroText.defaultProps = {
  size: 1,
  faded: false,
};

export default HeroText;
