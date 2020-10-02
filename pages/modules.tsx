import { gql, useQuery } from "@apollo/client"
import { useRouter } from "next/dist/client/router"
import Head from "next/head"
import Link from "next/link"
import { useEffect } from "react"

import Input from "../components/Input"
import RegularLayout from "../displays/RegularLayout"
import { Module } from "../types/Module"

const SEARCH_QUERY = gql`
  query search($query: String!) {
    search(
      query: $query
      pagination: { includeCount: false, pageSize: 100, pageNumber: 1 }
    ) {
      result {
        id
        name
        description
        isCore
        author {
          nickname
        }
        tags {
          name
        }
      }
    }
  }
`

interface FeaturedModule {
  id: number
  name: string
  description: string
  authorName: string
}

const featuredList: FeaturedModule[] = [
  {
    id: 2,
    name: "dessert-yaml-js",
    description: "yaml-js but with WebAssembly",
    authorName: "Lucas",
  },
  {
    id: 8,
    name: "dessert-jsonschema",
    description: "JSONSchema but with WebAssembly",
    authorName: "Lucas",
  },
  {
    id: 5,
    name: "dessert-filesize",
    description: "filesize.js but with WebAssembly",
    authorName: "Lucas",
  },
  {
    id: 9,
    name: "dessert-showdown",
    description: "ShowDown but with WebAssembly",
    authorName: "Lucas",
  },
  {
    id: 1,
    name: "dessert-js-yaml",
    description: "js-yaml but with WebAssembly",
    authorName: "Lucas",
  },
  {
    id: 6,
    name: "dessert-markdown-core",
    description: "WASM core for showdown module",
    authorName: "Lucas",
  },
]

const FeaturedModule = ({
  module,
}: {
  module: FeaturedModule
}): JSX.Element => (
  <div
    key={module.id}
    style={{
      margin: "1em 1em 1em 0",
      border: "1px solid rgba(100, 100, 100, 0.2)",
      borderRadius: "5px",
      padding: "0.8em",
      boxShadow:
        "0 0.5px 0 0 #ffffff inset, 0 1px 2px 0 rgba(100, 100, 100, 0.2)",
    }}
  >
    <h3 style={{ margin: "0.3em 0", minWidth: "14em" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Link href={`/module/${module.id}`}>
          <a>{module.name}</a>
        </Link>
      </div>
    </h3>
    <p style={{ margin: "0.4em 0" }}>{module.description}</p>
    <p
      style={{
        margin: "0.4em 0",
        color: "#ccc",
      }}
    >
      By {module.authorName}{" "}
    </p>
  </div>
)

const Modules = (): JSX.Element => {
  const router = useRouter()
  const q = router.query.q?.toString() || ""
  const { loading, error, data } = useQuery<{ search: { result: Module[] } }>(
    SEARCH_QUERY,
    {
      variables: { query: q },
    }
  )

  useEffect(() => {}, [data])

  return (
    <>
      <Head>
        <title>Search Modules</title>
      </Head>

      <RegularLayout maxWidth="58em">
        <h2>Search Modules</h2>
        <Input
          placeholder="Search anything"
          onChange={(e) => {
            if (e.currentTarget.value.length > 0) {
              router.push(`/modules?q=${e.currentTarget.value}`, undefined, {
                shallow: true,
              })
            } else {
              router.push("/modules", undefined, {
                shallow: true,
              })
            }
          }}
          value={q}
        />

        {q === "" && (
          <div>
            <h2 style={{ marginTop: "1em" }}>🎉 Featured</h2>
            <div
              style={{
                display: "flex",
                flexFlow: "row wrap",
                width: "100%",
              }}
            >
              {featuredList.map((module) => (
                <FeaturedModule module={module} />
              ))}
            </div>
          </div>
        )}

        {q !== "" && loading && <p>Loading...</p>}

        {q !== "" &&
          !loading &&
          !error &&
          data &&
          data.search.result.length === 0 && (
            <p>There are no modules matching your request...</p>
          )}

        {q !== "" &&
          !loading &&
          !error &&
          data &&
          data.search.result.length > 0 && (
            <div>
              {data.search.result.map((module, i) => (
                <div
                  key={module.id}
                  style={{
                    margin: "1em 0",
                    borderBottom:
                      i === data.search.result.length - 1
                        ? "none"
                        : "1px solid rgba(100, 100, 100, 0.08)",
                  }}
                >
                  <h3 style={{ margin: "0.3em 0" }}>
                    <Link href={`/module/${module.id}`}>
                      <a>{module.name}</a>
                    </Link>
                  </h3>
                  <p style={{ margin: "0.4em 0" }}>{module.description}</p>
                  <p
                    style={{
                      margin: "0.4em 0",
                      color: "#ccc",
                    }}
                  >
                    By {module.author.nickname}{" "}
                    {module.tags.length > 0
                      ? `| Tags: ${module.tags.map((t) => t.name).join(", ")}`
                      : "| No tags"}
                  </p>
                </div>
              ))}
            </div>
          )}
      </RegularLayout>
    </>
  )
}

export default Modules
