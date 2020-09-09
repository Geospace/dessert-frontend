import { useRouter } from "next/dist/client/router"
import Head from "next/head"
import { useEffect } from "react"

import ThinTitle from "../components/ThinTitle"
import LogInForm from "../displays/LoginForm"
import RegularLayout from "../displays/RegularLayout"
import { getUser } from "../utils/user"

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
      </RegularLayout>
    </>
  )
}

export default LogIn
