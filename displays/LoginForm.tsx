import { gql, useMutation } from '@apollo/client'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { useState } from 'react'
import { toast } from 'react-toastify'

import Input from '../components/Input'
import LargeButton from '../components/LargeButton'
import styles from './LoginForm.module.css'

// The login form
// All the login logic is here too

// Proxy component to apply some styling on the labels
const Label = ({ children }: { children: string }): JSX.Element => (
  <label className={styles.label}>{children}</label>
)

// Log an user on the server
// The request will fail is the credentials are wrong
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
  const [email, updateEmail] = useState('')
  const [password, updatePassword] = useState('')
  const [login] = useMutation(LOGIN_MUTATION)
  const router = useRouter()

  // The form itself does NOT do the request (preventDefault)
  // See the call to login in the onClick of LargeButton
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

        <LargeButton
          onClick={(e): void => {
            e.preventDefault()
            login({ variables: { email, password } })
              .then((resp) => { router.push('/').catch(e => { throw e }) })
              .catch(() => {
                toast.error('Invalid username/password')
                updateEmail('')
                updatePassword('')
              })
          }}
        >
          Log In
        </LargeButton>
      </div>
      <p style={{ textAlign: 'center', marginTop: '2em' }}>
        Do you want to create an account?{' '}
        <Link href='/signup'>
          <a>Click here to sign up!</a>
        </Link>
      </p>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '4%'
        }}
      >
        <form action='https://prod.dessert.vodka/signin' method='post'>
          <input type='hidden' name='Provider' value='GitHub' />
          <button
            type='submit'
            style={{
              color: 'white',
              background: 'black',
              padding: '0.5em 0.7em',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <img
              src='/github.ico'
              alt='Chat Poulpe'
              style={{ height: '22px', marginRight: '10px' }}
            />
            <span>Connect using GitHub</span>
          </button>
        </form>
      </div>
    </>
  )
}

export default LogInForm
