import Head from "next/head"

import ContactForm from "../displays/ContactForm"
import RegularLayout from "../displays/RegularLayout"

// A contact page, no fuss

const Contact = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <RegularLayout footer={false}>
        <div style={{ marginTop: "8%", textAlign: "center" }}>
          <h2>Contact</h2>
        </div>
        <p style={{ textAlign: "center" }}>
          Please, use the form below to contact us. We will respond to you
          shortly.
        </p>
        <ContactForm />
      </RegularLayout>
    </>
  )
}

export default Contact
