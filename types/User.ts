import { Module } from "./Module"
import { Token } from "./Token"

// An user
export interface User {
  nickname: string
  login: string
  profilePicUrl: string
  tokens: Token[]
  modules: { result: Module[] }
}
