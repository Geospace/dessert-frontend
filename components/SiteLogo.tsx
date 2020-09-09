import Link from "next/link"

import style from "./SiteLogo.module.css"

interface Props {
  size: number
}

const SiteLogo = ({ size }: Props): JSX.Element => (
  <span className={style.logo} style={{ fontSize: `${size}em` }}>
    <Link href="/">
      <a>Dessert</a>
    </Link>
  </span>
)

export default SiteLogo
