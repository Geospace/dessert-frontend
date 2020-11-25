// Metadata for a Post
interface PostData {
  title: string
  date: Date
  author: string
  cover: string
  category: string
}

// A Post for our internal blog
export interface Post {
  filePath: string
  data: PostData
}
