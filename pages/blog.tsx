import Head from 'next/head'
import Link from 'next/link'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

import RegularLayout from '../displays/RegularLayout'
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils'
import { Post } from '../types/Post'

// The blog is a collection of statically generated pages
// See here for tutorial: https://johnpolacek.com/building-a-blog-with-nextjs-and-mdx

const Blog = ({ posts }: {posts: Post[]}): JSX.Element => (
  <>
    <Head>
      <title>Blog</title>
    </Head>

    <RegularLayout>
      <h2>The Blog</h2>

      <p>The latest news from Dessert...</p>

      <ul style={{ lineHeight: '1.5em' }}>
        {
          posts.map((post: Post) => (
            <li key={post.filePath}>
              <Link
                as={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`}
                href='/blog/[slug]'
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
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath
    }
  })

  return { props: { posts } }
}

export default Blog
