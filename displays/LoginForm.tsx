import { gql, useMutation } from "@apollo/client"
import { useRouter } from "next/dist/client/router"
import Link from "next/link"
import { useState } from "react"
import { toast } from "react-toastify"

import Input from "../components/Input"
import LargeButton from "../components/LargeButton"
import { setUser } from "../utils/user"
import styles from "./LoginForm.module.css"

const Label = ({ children }: { children: string }): JSX.Element => (
  <label className={styles.label}>{children}</label>
)

const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password, remember: true) {
      nickname
      profilePicUrl
      tokens {
        id
        description
      }
    }
  }
`

const LogInForm = (): JSX.Element => {
  const [email, updateEmail] = useState("")
  const [password, updatePassword] = useState("")
  const [login] = useMutation(LOGIN_MUTATION)
  const router = useRouter()

  return (
    <>
      <div className={styles.box}>
        <div className={styles.group}>
          <Label>Email address</Label>
          <Input
            value={email}
            onChange={(e): void => updateEmail(e.currentTarget.value)}
          />
        </div>

        <div className={styles.group}>
          <Label>Password</Label>
          <Input
            value={password}
            onChange={(e): void => updatePassword(e.currentTarget.value)}
            inputType="password"
          />
        </div>

        <LargeButton
          onClick={(e): void => {
            e.preventDefault()
            login({ variables: { email, password } })
              .then(({ data }) => {
                setUser(data.login)
                router.push("/")
              })
              .catch(() => {
                toast.error("Invalid username/password")
                updateEmail("")
                updatePassword("")
              })
          }}
        >
          Log In
        </LargeButton>
      </div>
      <p style={{ textAlign: "center", marginTop: "2em" }}>
        Do you want to create an account?{" "}
        <Link href="/signup">
          <a>Click here to sign up!</a>
        </Link>
      </p>
    </>
  )
}

export default LogInForm