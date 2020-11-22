import Head from 'next/head'

import ThinTitle from '../components/ThinTitle'
import LogInForm from '../displays/LoginForm'
import RegularLayout from '../displays/RegularLayout'

// A login page, no fuss
// All the logic is in the LogInForm component

const LogIn = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Log In</title>
      </Head>

      <RegularLayout footer={false}>
        <div style={{ textAlign: 'center', marginTop: '8%' }}>
          <ThinTitle size={1.5}>Log In to Dessert</ThinTitle>
        </div>
        <LogInForm />
      </RegularLayout>
    </>
  )
}

export default LogIn
