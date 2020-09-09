import { FormEvent, useState } from "react"

import styles from "./SearchBar.module.css"

interface Props {
  onSearch: (s: string, type?: string) => void
}

const SearchBar = ({ onSearch }: Props): JSX.Element => {
  const [moduleType, setModuleType] = useState<string | undefined>(undefined)
  const [query, setQuery] = useState<string>("")

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    onSearch(query, moduleType)
    e.preventDefault()
  }

  const handleInput = (e: FormEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget
    setQuery(value)
  }

  const handleSelect = (e: FormEvent<HTMLSelectElement>): void => {
    const { value } = e.currentTarget
    const newModuleType = value === "NONE" ? undefined : value
    setModuleType(newModuleType)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        onChange={handleInput}
        id="search"
        type="search"
        placeholder="Search anything..."
      />
      <select
        className={styles.select}
        value={moduleType}
        onChange={handleSelect}
      >
        <option value="NONE">Module Type</option>
        <option value="CONNECTOR">Connector</option>
        <option value="CORE">Core</option>
      </select>
      <button className={styles.submit} type="submit">
        Search
      </button>
    </form>
  )
}

export default SearchBar
