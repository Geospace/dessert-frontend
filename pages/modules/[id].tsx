import { gql, useQuery } from '@apollo/client'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

import Loading from '../../displays/Loading'
import RegularLayout from '../../displays/RegularLayout'
import { Module as ModuleType } from '../../types/Module'

// This page shows information about one module
// The ID of said module is in the URL so such pages can be shared
// via links which is important inside a group of developers

// Fetch information about one module, by ID
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

// We rely on the GitHub API to retrieve the README of the modules
const API_BASE = 'https://api.github.com/repos/'

// Local component that allows to combine an icon and some text
const Tag = ({
  children,
  icon
}: {
  children: React.ReactNode
  icon: string
}): JSX.Element => (
  <div
    style={{
      padding: '0.5em 0.8em',
      backgroundColor: '#eee',
      borderRadius: '5px',
      border: '1px solid rgba(120, 120, 120, 0.08)',
      cursor: 'default',
      marginRight: '1em'
    }}
  >
    <span>{icon}</span>
    <span style={{ marginLeft: '0.5em' }}>{children}</span>
  </div>
)

const Module = (): JSX.Element => {
  const router = useRouter()
  const [stars, updateStars] = useState(0)
  const [license, updateLicense] = useState('Unknown License')
  const [readme, updateReadme] = useState('*No README found...*')
  const { loading, error, data } = useQuery<{ module: ModuleType }>(
    MODULE_QUERY,
    {
      variables: {
        id: router.query.id !== undefined && parseInt(router.query.id.toString(), 10)
      }
    }
  )

  useEffect(() => {
    if (loading ?? error !== undefined ?? data === undefined) {
      return
    }

    if (data.module.githubLink === null || data.module.githubLink === '') {
      return
    }

    // Fetch data from the GitHub API
    const url = API_BASE + data.module.githubLink.split('/').splice(3).join('/')
    fetch(url)
      .then(async (resp) => await resp.json())
      .then((gh) => {
        updateStars(gh.stargazers_count)
        updateLicense(gh.license.name)
      })
      .catch(e => { throw e })

    fetch(
      `${data.module.githubLink.replaceAll(
        'github.com',
        'raw.githubusercontent.com'
      )}/master/README.md`
    )
      .then(async (resp) => await resp.text())
      .then(updateReadme)
      .catch(e => { throw e })
  }, [loading, error, data])

  if (loading) {
    return <Loading />
  }

  if (error !== undefined ?? data === undefined) {
    return <p>What are you doing?</p>
  }

  const { module } = data

  return (
    <>
      <Head>
        <title>Module: {module.name}</title>
      </Head>

      <RegularLayout maxWidth='42em'>
        <h2>Module {module.name}</h2>
        <div
          style={{
            display: 'flex'
          }}
        >
          <Tag icon='🤖'>{module.isCore ? 'Core' : 'Connector'}</Tag>
          <Tag icon='⭐'>{stars}</Tag>
          <Tag icon='⚖️'>{license}</Tag>
        </div>
        <p>{module.description}</p>
        <p>
          <a href={module.githubLink ?? '#'}>Click to view on GitHub</a>
        </p>

        <p className='markdown-body'>
          <ReactMarkdown source={readme} />
        </p>
      </RegularLayout>
    </>
  )
}

export default Module
