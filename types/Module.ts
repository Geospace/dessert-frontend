interface ModuleAuthor {
  nickname: string
}

interface Tag {
  name: string
}

export interface Module {
  id: number
  name: string
  description: string
  author: ModuleAuthor
  isCore: boolean
  githubLink: string
  tags: Tag[]
}
