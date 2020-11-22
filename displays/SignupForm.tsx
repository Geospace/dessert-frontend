import { gql, useMutation } from '@apollo/client'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { useState } from 'react'
import { toast } from 'react-toastify'

import Input from '../components/Input'
import LargeButton from '../components/LargeButton'
import styles from './LoginForm.module.css'

// See LoginForm, this is the exact same thing

const Label = ({ children }: { children: string }): JSX.Element => (
  <label className={styles.label}>{children}</label>
)

const REGISTER_MUTATION = gql`
  mutation register($email: String!, $password: String!, $nickname: String!) {
    register(email: $email, password: $password, nickname: $nickname) {
      id
    }
  }
`

const SignUpForm = (): JSX.Element => {
  const [email, updateEmail] = useState('')
  const [password, updatePassword] = useState('')
  const [nickname, updateNickname] = useState('')
  const [register] = useMutation(REGISTER_MUTATION)
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
            inputType='password'
          />
        </div>

        <div className={styles.group}>
          <Label>Nickname</Label>
          <Input
            value={nickname}
            onChange={(e): void => updateNickname(e.currentTarget.value)}
          />
        </div>

        <LargeButton
          onClick={(e): void => {
            e.preventDefault()
            register({ variables: { email, password, nickname } })
              .then(async () => {
                toast.success('Account successfully created')
                return await router.push('/login')
              })
              .catch(() => {
                toast.error('Could not create your account')
                updatePassword('')
              })
          }}
        >
          Sign Up
        </LargeButton>
      </div>
      <p style={{ textAlign: 'center', marginTop: '2em' }}>
        Do you already have an account?{' '}
        <Link href='/login'>
          <a>Click here to log in!</a>
        </Link>
      </p>
    </>
  )
}

export default SignUpForm
