import { User } from "../types/User"

const USER_KEY = "user"

export function getUser(): User | undefined {
  const user = localStorage.getItem(USER_KEY)
  if (user === null || user === undefined || user === "undefined") {
    return undefined
  }

  return JSON.parse(user) as User
}

export function setUser(user: User): void {
  localStorage.setItem(USER_KEY, JSON.stringify(user))
}

export function flushUser(): void {
  localStorage.removeItem(USER_KEY)
}
