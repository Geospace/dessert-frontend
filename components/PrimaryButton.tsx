import Link from 'next/link'

import styles from './PrimaryButton.module.css'

// Our primary button, filled

interface Props {
  to?: string
  onClick?: () => void
  children: string
}

const PrimaryButton = ({ to, onClick, children }: Props): JSX.Element => {
  if (to !== undefined) {
    return (
      <div className={styles.wrap}>
        <Link href={to}>
          <a className={styles.button}>{children}</a>
        </Link>
      </div>
    )
  }

  if (onClick !== undefined) {
    return (
      <div className={styles.wrap}>
        <a className={styles.button} onClick={onClick}>
          {children}
        </a>
      </div>
    )
  }

  return (
    <div className={styles.wrap}>
      <a className={styles.button}>{children}</a>
    </div>
  )
}

PrimaryButton.defaultProps = {
  to: undefined,
  onClick: undefined
}

export default PrimaryButton
