import { gql, useQuery } from "@apollo/client"
import { useRouter } from "next/dist/client/router"
import Head from "next/head"
import Link from "next/link"
import { useEffect } from "react"

import Input from "../components/Input"
import RegularLayout from "../displays/RegularLayout"
import { Module } from "../types/Module"

// This page allows to search for modules
// When the user hasn't started searching for something, featured and latest
// modules are shown instead
// Otherwise the actual search results are listed

// This query is fired when the user searches for something
// Modules are grabbed 100 by 100 and we have automatic pagination on scroll
// 100 might looks big the the payload is very small here: its only text
// The backend code is very light too so nothing wrong
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

// TODO This was some mock data to quickly validate the idea during an UX
// seminar but we should actually pull data from the back-end at some point.
// Fixing the featured modules IDs is fine but the information must be
// pulled from server in case the author changes something.
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

// When the user hasn't searched something yet, we display mutliple sections
// This component allows to avoid styling duplication
const SectionTitle = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => (
  <div style={{ fontWeight: "bold", margin: "2em 0 1em 0" }}>{children}</div>
)

// Shows at most three columns of features modules
const FeaturedModuleComponent = ({
  module,
}: {
  module: FeaturedModule
}): JSX.Element => (
  <div
    style={{
      margin: "0em 1em 1em 0",
      border: "1px solid rgba(100, 100, 100, 0.2)",
      borderRadius: "5px",
      padding: "0.8em",
      boxShadow:
        "0 0.5px 0 0 #ffffff inset, 0 1px 2px 0 rgba(100, 100, 100, 0.2)",
      width: "16em",
    }}
  >
    <h3 style={{ margin: "0.3em 0" }}>
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

// Show a popular tag
// Cling on tag fires a search with that tag
const TagComponent = ({ children }: { children: string }): JSX.Element => {
  const router = useRouter()

  return (
    <div
      style={{
        border: "1px solid rgba(199, 21, 133, 0.2)",
        backgroundColor: "rgba(199, 21, 133, 0.05)",
        color: "rgba(199, 21, 133, 0.9)",
        borderRadius: "3px",
        padding: "0.2em 0.4em",
        marginRight: "0.5em",
        cursor: "pointer",
      }}
      onClick={() => router.push(`/modules?q=${children}`)}
    >
      {children}
    </div>
  )
}

const Modules = (): JSX.Element => {
  const router = useRouter()
  const q = router.query.q?.toString() || ""
  const { loading, error, data } = useQuery<{ search: { result: Module[] } }>(
    SEARCH_QUERY,
    {
      variables: { query: q },
    }
  )

  // For the search we actually have a pretty nice feature where the URL
  // is updated real time as the user inputs text
  // Said URL can then be shared, the page can be shared...
  // TODO Add a debounce here

  return (
    <>
      <Head>
        <title>Search Modules</title>
      </Head>

      <RegularLayout maxWidth="100%">
        <h2>Search Modules</h2>
        {/* Aligning the search bar with the second column of the featured modules */}
        <div style={{ width: "calc(2 * 16em + 1 * 1em + 4 * 0.8em)" }}>
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
        </div>

        {q === "" && (
          <div>
            <SectionTitle>📈 Popular Tags</SectionTitle>
            <div
              style={{
                display: "flex",
              }}
            >
              <TagComponent>Yaml</TagComponent>
              <TagComponent>JSON</TagComponent>
              <TagComponent>WebAssembly</TagComponent>
            </div>

            <SectionTitle>⭐ Featured Modules</SectionTitle>
            <div
              style={{
                display: "flex",
                flexFlow: "row wrap",
              }}
            >
              {featuredList.map((module) => (
                <FeaturedModuleComponent key={module.id} module={module} />
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
