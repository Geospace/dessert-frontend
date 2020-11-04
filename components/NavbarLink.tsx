import Link from "next/link"

import style from "./NavbarLink.module.css"

// A link, but for the navigation bar

interface Props {
  children: string
  to: string
  active?: boolean
}

const NavbarLink = ({ children, to, active }: Props): JSX.Element => (
  <li className={style.link}>
    <Link href={to}>
      <a style={{ color: active ? "#c71585" : undefined }}>{children}</a>
    </Link>
  </li>
)

NavbarLink.defaultProps = {
  active: false,
}

export default NavbarLink
