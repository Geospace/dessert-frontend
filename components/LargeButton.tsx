import styles from "./LargeButton.module.css"

// A button, but larger

interface Props {
  children: string
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void
}

const LargeButton = ({ children, onClick }: Props): JSX.Element => (
  <div onClick={onClick} className={styles.button}>
    {children}
  </div>
)

export default LargeButton
