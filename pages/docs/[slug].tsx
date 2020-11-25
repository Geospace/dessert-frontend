import fs from 'fs'
import matter from 'gray-matter'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import Head from 'next/head'
import path from 'path'

import { docsFilePaths, DOCS_PATH} from '../../utils/mdxUtils'
import RegularLayout from '../../displays/RegularLayout'
import SiteLogo from '../../components/SiteLogo'

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  SiteLogo,
  Head
}

export default function DocsPage ({ source, frontMatter }: any): JSX.Element {
  const content = hydrate(source, { components })

  return (
    <RegularLayout maxWidth='42em'>
      <h1>{frontMatter.title}</h1>
      <p style={{ marginTop: '-20px', color: '#444' }}>Written by Dessert • Published {frontMatter.date} • Documentation</p>
      <div style={{
        background: `url("${frontMatter.cover as string}") no-repeat center center`,
        backgroundSize: 'cover',
        height: 200,
        maxWidth: 800,
        borderRadius: 5,
        border: '1px solid rgb(226, 232, 240)',
        margin: '2em 0'
      }}
      />
      <div>{content}</div>
    </RegularLayout>
  )
}

export async function getStaticProps ({ params }: any): Promise<any> {
  const postFilePath = path.join(DOCS_PATH, `${params.slug as string}.mdx`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)

  const mdxSource = await renderToString(content, {
    components,
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: []
    },
    scope: data
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data
    }
  }
}

export async function getStaticPaths (): Promise<any> {
  const paths = docsFilePaths
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false
  }
}
