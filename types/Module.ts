// Wrapper for a module author
interface ModuleAuthor {
  nickname: string
}

// A tag attached to a module
interface Tag {
  name: string
}

// A module
export interface Module {
  id: number
  name: string
  description: string
  author: ModuleAuthor
  isCore: boolean
  githubLink: string | null
  tags: Tag[]
}
