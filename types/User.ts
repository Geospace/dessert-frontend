import { Module } from "./Module"
import { Token } from "./Token"

export interface User {
  nickname: string
  profilePicUrl: string
  tokens: Token[]
  modules: { result: Module[] }
}
