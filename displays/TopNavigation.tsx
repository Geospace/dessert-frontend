import { gql, useQuery } from '@apollo/client'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { Hidden, Visible } from 'react-grid-system'

import NavbarLink from '../components/NavbarLink'
import PrimaryButton from '../components/PrimaryButton'
import SiteLogo from '../components/SiteLogo'
import { User } from '../types/User'
import styles from './TopNavigation.module.css'

// Our top bar
// Mostly just some links, and the user's profile if he is connected

const elements = [
  { to: '/modules', text: 'Modules' },
  {
    to: '/docs', text: 'Documentation'
  },
  { to: '/blog', text: 'Blog' },
  {
    to: '/docs/who-are-we',
    text: 'About'
  },
  { to: '/contact', text: 'Contact' }
]

// Query some information about the connected user
const ME_QUERY = gql`
  query {
    me {
      nickname
      profilePicUrl
      tokens {
        id
        token
        description
      }
      modules(pagination: { includeCount: true, pageSize: 5, pageNumber: 1 }) {
        result {
          id
          name
          author {
            nickname
          }
          description
        }
      }
    }
  }
`

const ProfilePic = ({
  profilePicture
}: {
  profilePicture: string
}): JSX.Element => {
  return (
    <Link href='/profile'>
      <a>
        <div
          style={{
            backgroundImage: `url(${profilePicture})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            marginLeft: '2em',
            borderRadius: '100%',
            height: '2.2em',
            width: '2.2em'
          }}
        />
      </a>
    </Link>
  )
}

const LoginSignup = (): JSX.Element => (
  <div className={styles.right}>
    <Link href='/login'>
      <a>Log In</a>
    </Link>

    <span className={styles.sign}>
      <PrimaryButton to='signup'>Sign Up</PrimaryButton>
    </span>
  </div>
)

const TopNavigation = (): JSX.Element => {
  const router = useRouter()
  const { loading, data } = useQuery<{ me: User }>(ME_QUERY)

  const links = elements.map((e, k) => (
    <span style={{ marginLeft: k !== 0 ? '1.5em' : 'none' }} key={e.text}>
      <NavbarLink active={router.pathname.includes(e.to)} to={e.to}>
        {e.text}
      </NavbarLink>
    </span>
  ))

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <>
      <div className={styles.navigation}>
        <SiteLogo size={1.5} />

        <Hidden xs>
          <div className={styles.group}>
            <ul className={styles.links}>{links}</ul>
            {data !== undefined ? (
              <ProfilePic profilePicture={data.me.profilePicUrl} />
            ) : (
              <LoginSignup />
            )}
          </div>
        </Hidden>

        <Visible xs>
          {data !== undefined ? (
            <ProfilePic profilePicture={data.me.profilePicUrl} />
          ) : (
            <LoginSignup />
          )}
        </Visible>
      </div>

      <Visible xs>
        <div className={styles.navigationMobile}>
          <ul className={styles.links}>{links}</ul>
        </div>
      </Visible>
    </>
  )
}

export default TopNavigation
