import styles from './ThinTitle.module.css'

// A title component, but thinner

interface Props {
  children: string
  size?: number
}

const ThinTitle = ({ children, size }: Props): JSX.Element => (
  <span style={{ fontSize: `${size !== undefined ? size : 1.1}em` }} className={styles.title}>
    {children}
  </span>
)

export default ThinTitle
