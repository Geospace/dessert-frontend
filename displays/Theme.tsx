import style from "./Theme.module.css"

// Proxy component to inject global theming

interface Props {
  children: React.ReactNode
}

const Theme = ({ children }: Props): JSX.Element => (
  <div className={style.theme}>{children}</div>
)

export default Theme
