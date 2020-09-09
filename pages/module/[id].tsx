import { gql, useQuery } from "@apollo/client"
import { useRouter } from "next/dist/client/router"
import Head from "next/head"
import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"

import Loading from "../../displays/Loading"
import RegularLayout from "../../displays/RegularLayout"
import { Module as ModuleType } from "../../types/Module"

const MODULE_QUERY = gql`
  query($id: Int!) {
    module(id: $id) {
      name
      description
      githubLink
      isCore
    }
  }
`

const API_BASE = "https://api.github.com/repos/"

const Tag = ({
  children,
  icon,
}: {
  children: React.ReactNode
  icon: string
}): JSX.Element => (
  <div
    style={{
      padding: "0.5em 0.8em",
      backgroundColor: "#eee",
      borderRadius: "5px",
      border: "1px solid rgba(120, 120, 120, 0.08)",
      cursor: "default",
      marginRight: "1em",
    }}
  >
    <span>{icon}</span>
    <span style={{ marginLeft: "0.5em" }}>{children}</span>
  </div>
)

const Module = (): JSX.Element => {
  const router = useRouter()
  const [stars, updateStars] = useState(0)
  const [license, updateLicense] = useState("Uknown Liscense")
  const [readme, updateReadme] = useState("*No README found...*")
  const { loading, error, data } = useQuery<{ module: ModuleType }>(
    MODULE_QUERY,
    {
      variables: {
        id: router.query.id && parseInt(router.query.id.toString(), 10),
      },
    }
  )

  useEffect(() => {
    if (loading || error || !data) {
      return
    }

    if (!data.module.githubLink) {
      return
    }

    const url = API_BASE + data.module.githubLink.split("/").splice(3).join("/")
    fetch(url)
      .then((resp) => resp.json())
      .then((gh) => {
        updateStars(gh.stargazers_count)
        updateLicense(gh.license.name)
      })

    fetch(
      `${data.module.githubLink.replaceAll(
        "github.com",
        "raw.githubusercontent.com"
      )}/master/README.md`
    )
      .then((resp) => resp.text())
      .then(updateReadme)
  }, [loading, error, data])

  if (loading) {
    return <Loading />
  }

  if (error || !data) {
    return <p>What are you doing?</p>
  }

  const { module } = data

  return (
    <>
      <Head>
        <title>Module: {module.name}</title>
      </Head>

      <RegularLayout maxWidth="42em">
        <h2>Module {module.name}</h2>
        <div
          style={{
            display: "flex",
          }}
        >
          <Tag icon="🤖">{module.isCore ? "Core" : "Connector"}</Tag>
          <Tag icon="⭐">{stars}</Tag>
          <Tag icon="⚖️">{license}</Tag>
        </div>
        <p>{module.description}</p>
        <p>
          <a href={module.githubLink}>Click to view on GitHub</a>
        </p>

        <p className="markdown-body">
          <ReactMarkdown source={readme} />
        </p>
      </RegularLayout>
    </>
  )
}

export default Module
