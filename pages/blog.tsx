import Head from "next/head"
import Link from "next/link"

import RegularLayout from "../displays/RegularLayout"

// The blog is a collection of statically generated pages
// See here for tutorial: https://johnpolacek.com/building-a-blog-with-nextjs-and-mdx

const Blog = (): JSX.Element => (
  <>
    <Head>
      <title>Blog</title>
    </Head>

    <RegularLayout>
      <h2>The Blog</h2>

      <p>The latest news from Dessert...</p>

      <ul style={{ lineHeight: "1.5em" }}>
        <li>
          <Link href="/blog/new-web-app">
            <a>20/09/10 - Meet the new Web Application!</a>
          </Link>
        </li>
        <li>
          <Link href="/blog/new-blog">
            <a>20/09/10 - Meet the new Blog!</a>
          </Link>
        </li>
      </ul>
    </RegularLayout>
  </>
)

export default Blog
