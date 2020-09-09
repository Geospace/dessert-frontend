import { useRouter } from "next/dist/client/router"
import Head from "next/head"
import { useEffect } from "react"

import ThinTitle from "../components/ThinTitle"
import LogInForm from "../displays/LoginForm"
import RegularLayout from "../displays/RegularLayout"
import { getUser } from "../utils/user"
import LargeButton from "../components/LargeButton"

const LogIn = (): JSX.Element => {
  const router = useRouter()

  useEffect(() => {
    const user = getUser()
    if (user !== undefined) {
      router.push("/profile")
    }
  })

  return (
    <>
      <Head>
        <title>Log In</title>
      </Head>

      <RegularLayout footer={false}>
        <div style={{ textAlign: "center", marginTop: "8%" }}>
          <ThinTitle size={1.5}>Log In to Dessert</ThinTitle>
        </div>
        <LogInForm />
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "4%" }}>
                                          <h1>Sign with GitHub</h1>
                                          <form action="https://prod.dessert.vodka/signin" method="post">
                                          <input type="hidden" name="Provider" value="GitHub" />

                                          <LargeButton type="submit">Connect using GitHub</LargeButton>
                                          </form>
                                          </div>

      </RegularLayout>
    </>
  )
}

export default LogIn
