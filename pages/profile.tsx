import { gql, useMutation, useQuery } from "@apollo/client"
import { useRouter } from "next/dist/client/router"
import Head from "next/head"
import Link from "next/link"
import { toast } from "react-toastify"

import PrimaryButton from "../components/PrimaryButton"
import Loading from "../displays/Loading"
import RegularLayout from "../displays/RegularLayout"
import { User } from "../types/User"

const ME_QUERY = gql`
  query {
    me {
      nickname
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

const LOGOUT_MUTATION = gql`
  mutation {
    logout
  }
`

const REVOKE_MUTATION = gql`
  mutation($token: String) {
    deleteToken(token: $token)
  }
`

const Index = (): JSX.Element => {
  const [logout] = useMutation(LOGOUT_MUTATION)
  const [revoke] = useMutation(REVOKE_MUTATION)
  const { loading, data } = useQuery<{ me: User }>(ME_QUERY)
  const router = useRouter()

  if (loading) {
    return <Loading />
  }

  if (!data || !data.me) {
    return <p>Somthing bad happened...</p>
  }

  return (
    <>
      <Head>
        <title>{data.me.nickname}&apos;s Profile</title>
      </Head>

      <RegularLayout maxWidth="42em">
        <h2>Hello, {data.me.nickname}</h2>

        <p>
          This is your profile. Only you can see this. Here you can view your
          latest uploaded modules and update your user preferences.
        </p>

        <h3>Tokens</h3>

        <p>These tokens were created from the CLI. You can revoke them here.</p>

        {data.me.tokens.length > 0 ? (
          <ul>
            {data.me.tokens.map((token) => (
              <li key={token.id}>
                {token.description} |{" "}
                <a
                  href="#"
                  onClick={() => {
                    if (window.confirm("Are you sure?")) {
                      revoke({ variables: { token: token.token } })
                        .then(() => toast.info("The token was revoked"))
                        .catch(() =>
                          toast.error(
                            "An error occured, the token was not deleted"
                          )
                        )
                    }
                  }}
                >
                  Click to revoke
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ fontStyle: "italic" }}>You have no tokens...</p>
        )}

        <h3>Modules</h3>

        <p>
          You uploaded {data.me.modules.result.length} module
          {data && data.me.modules.result.length > 1 && "s"}. Thank you for your
          contributions! Here are your latest modules...
        </p>

        {data.me.modules.result.length > 0 ? (
          <ul>
            {data.me.modules.result.map((module) => (
              <li key={module.id}>
                <Link href={`/module/${module.id}`}>
                  <a>{module.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ fontStyle: "italic" }}>You have no modules...</p>
        )}

        <h3>Log Out</h3>

        <p>
          Click the following button in order to log out. You will be redirected
          to the home page.
        </p>

        <PrimaryButton
          onClick={() => {
            logout()
              .then(() => {
                toast.success("You have been logged out")
                router.push("/")
              })
              .catch(() => {
                toast.error("An error occured, you were not logged out")
              })
          }}
        >
          Disconnect
        </PrimaryButton>

        <h3>Support</h3>

        <p>
          Do you need help? Please, open an issue{" "}
          <a href="https://github.com/dessert-wasm/">on GitHub</a>.
        </p>
      </RegularLayout>
    </>
  )
}

export default Index
