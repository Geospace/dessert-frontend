import fs from 'fs'
import matter from 'gray-matter'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import Head from 'next/head'
import path from 'path'

import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils'
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

export default function PostPage ({ source, frontMatter }: any): JSX.Element {
  const content = hydrate(source, { components })

  return (
    <RegularLayout maxWidth='42em'>
      <h1>{frontMatter.title}</h1>
      <div>{content}</div>
    </RegularLayout>
  )
}

export async function getStaticProps ({ params }: any): Promise<any> {
  const postFilePath = path.join(POSTS_PATH, `${params.slug as string}.mdx`)
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
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }))

  console.log(paths)

  return {
    paths,
    fallback: false
  }
}
