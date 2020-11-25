import Head from 'next/head'
import Link from 'next/link'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

import RegularLayout from '../displays/RegularLayout'
import { docsFilePaths, DOCS_PATH } from '../utils/mdxUtils'
import { Post } from '../types/Post'

// The blog is a collection of statically generated pages
// See here for tutorial: https://johnpolacek.com/building-a-blog-with-nextjs-and-mdx

const Docs = ({ posts }: {posts: Post[]}): JSX.Element => (
  <>
    <Head>
      <title>Documentation Center</title>
    </Head>

    <RegularLayout>
      <h2>Dessert's Documentation Center</h2>

      <p>Click the links below to browse our documentation center...</p>

      <ul style={{ lineHeight: '1.5em' }}>
        {
          posts.map((post: Post) => (
            <li key={post.filePath}>
              <Link
                as={`/docs/${post.filePath.replace(/\.mdx?$/, '')}`}
                href='/docs/[slug]'
              >
                <a>{post.data.title}</a>
              </Link>
            </li>
          ))
        }
      </ul>
    </RegularLayout>
  </>
)

export function getStaticProps (): any {
  const posts = docsFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(DOCS_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath
    }
  })

  return { props: { posts } }
}

export default Docs
