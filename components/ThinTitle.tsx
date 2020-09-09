import styles from "./ThinTitle.module.css"

interface Props {
  children: string
  size?: number
}

const ThinTitle = ({ children, size }: Props): JSX.Element => (
  <span style={{ fontSize: `${size}em` }} className={styles.title}>
    {children}
  </span>
)

ThinTitle.defaultProps = {
  size: 1.1,
}

export default ThinTitle
