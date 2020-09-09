import { Col, Container, Row, useScreenClass } from "react-grid-system"

import ThinTitle from "../components/ThinTitle"
import styles from "./IntroGrid.module.css"

interface Props {
  title: string
  children: React.ReactNode
}

const ConfiguredCol = ({ title, children }: Props): JSX.Element => {
  const screenClass = useScreenClass()

  return (
    <Col
      xs={12}
      md={6}
      className={styles.col}
      style={{
        marginBottom: ["xs", "sm"].includes(screenClass) ? "2em" : undefined,
      }}
    >
      <ThinTitle>{title}</ThinTitle>

      <p>{children}</p>
    </Col>
  )
}

const IntroGrid = (): JSX.Element => {
  const screenClass = useScreenClass()

  return (
    <Container>
      <Row
        style={{
          marginBottom: ["xs", "sm"].includes(screenClass) ? undefined : "2em",
        }}
      >
        <ConfiguredCol title="Easy">
          Dessert modules are drop-in replacements for their JavaScript
          counterparts. <a href="#">Take our tour.</a>
        </ConfiguredCol>
        <ConfiguredCol title="Modern">
          Dessert and WebAssembly brings near-native performance in the browser.{" "}
          <a href="#">Learn more here.</a>
        </ConfiguredCol>
      </Row>

      <Row>
        <ConfiguredCol title="Open Source">
          Dessert is a free, open source, and community-driven. All
          contributions are welcome! <a href="#">Read the guide.</a>
        </ConfiguredCol>
        <ConfiguredCol title="Incremental">
          Incrementally introduce WebAssembly into your codebase, with the tools{" "}
          <a href="#">you are already using</a>.
        </ConfiguredCol>
      </Row>
    </Container>
  )
}

export default IntroGrid
