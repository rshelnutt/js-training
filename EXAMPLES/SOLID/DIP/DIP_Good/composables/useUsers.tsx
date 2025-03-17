import { useState, useEffect } from "react"
import type { User } from "../types/User"

// Custom hook for fetching users - can be changed without affecting UserList
const useUsers = () => {
  const [state, setState] = useState({
    users: [] as User[],
    loading: true,
    error: null,
  })

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setState({ users: data, loading: false, error: null })
      })
      .catch((error) => {
        setState({ users: [], loading: false, error: error.message })
      })
  }, [])

  return state
}

export default useUsers
