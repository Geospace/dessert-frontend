import Head from "next/head"

import ThinTitle from "../components/ThinTitle"
import RegularLayout from "../displays/RegularLayout"
import SignUpForm from "../displays/SignupForm"

const SignUp = (): JSX.Element => (
  <>
    <Head>
      <title>Sign Up</title>
    </Head>

    <RegularLayout footer={false}>
      <div style={{ textAlign: "center", marginTop: "8%" }}>
        <ThinTitle size={1.5}>Sign Up to Dessert</ThinTitle>
      </div>
      <SignUpForm />
    </RegularLayout>
  </>
)

export default SignUp
