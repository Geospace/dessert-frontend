import Link from "next/link"

import styles from "./BigOutlineButton.module.css"

// A big button that is empty on the inside

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
