import SiteLogo from "../components/SiteLogo"
import style from "./Footer.module.css"

const Footer = (): JSX.Element => (
  <div className={style.footer}>
    <p>
      <SiteLogo size={0.9} />, all rights reserved.
      <br />
      Favicon made by{" "}
      <a
        href="https://www.flaticon.com/free-icon/donut_3125268?term=dessert&page=2&position=78"
        title="Icongeek26"
      >
        Icongeek26
      </a>{" "}
      from{" "}
      <a href="https://www.flaticon.com/" title="Flaticon">
        {" "}
        www.flaticon.com
      </a>
      .
    </p>
  </div>
)

export default Footer
