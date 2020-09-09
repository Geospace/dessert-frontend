import Link from "next/link"

import styles from "./BigOutlineButton.module.css"

interface Props {
  to: string
  children: string
}

const BigOutlineButton = ({ to, children }: Props): JSX.Element => (
  <Link href={to}>
    <a className={styles.button}>{children}</a>
  </Link>
)

export default BigOutlineButton
