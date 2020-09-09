import { gql, useQuery } from "@apollo/client"
import { useRouter } from "next/dist/client/router"
import Head from "next/head"
import Link from "next/link"
import { useEffect, useState } from "react"

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

      <RegularLayout maxWidth="42em">
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
          <p>Please search for something in order to get results...</p>
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
