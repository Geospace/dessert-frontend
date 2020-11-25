import fs from 'fs'
import path from 'path'

// This file is part of the Next.js/MDX/Remote example
// https://github.com/vercel/next.js/blob/canary/examples/with-mdx-remote/utils/mdxUtils.js

// POSTS_PATH is useful when you want to get the path to a specific file.
export const POSTS_PATH = path.join(process.cwd(), 'posts')

// DOCS_PATH is useful when you want to get the path to a specific piece of documentation.
export const DOCS_PATH = path.join(process.cwd(), 'docs')

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory.
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  .filter((path) => /\.mdx?$/.test(path))

// docsFilePaths is the list of all mdx files inside the DOCS_PATH directory.
export const docsFilePaths = fs
  .readdirSync(DOCS_PATH)
  .filter((path) => /\.mdx?$/.test(path))
