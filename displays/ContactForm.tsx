import Link from "next/link"
import { useState } from "react"
import { toast } from "react-toastify"

import Input from "../components/Input"
import PrimaryButton from "../components/PrimaryButton"
import TextArea from "../components/TextArea"
import styles from "./ContactForm.module.css"

// See the login form
// Nothing more here

// Proxy component to apply some styling on the labels
const Label = ({ children }: { children: string }): JSX.Element => (
  <label className={styles.label}>{children}</label>
)

const LogInForm = (): JSX.Element => {
  const [email, updateEmail] = useState("")
  const [name, updateName] = useState("")
  const [obj, updateObj] = useState("")
  const [txt, updateTxt] = useState("")

  return (
    <>
      <div className={styles.box}>
        <div className={styles.group}>
          <Label>Name</Label>
          <Input
            value={name}
            onChange={(e): void => updateName(e.currentTarget.value)}
          />
        </div>

        <div className={styles.group}>
          <Label>Email address</Label>
          <Input
            value={email}
            onChange={(e): void => updateEmail(e.currentTarget.value)}
          />
        </div>

        <div className={styles.group}>
          <Label>Object</Label>
          <Input
            value={obj}
            onChange={(e): void => updateObj(e.currentTarget.value)}
          />
        </div>

        <div className={styles.group}>
          <Label>Your Message</Label>
          <TextArea
            value={txt}
            onChange={(e): void => updateTxt(e.currentTarget.value)}
          />
        </div>

        <PrimaryButton
          onClick={(): void => {
            console.log(name, email, obj, txt)
            toast.info("Thank you for your message!")
          }}
        >
          Send
        </PrimaryButton>
      </div>
    </>
  )
}

export default LogInForm
