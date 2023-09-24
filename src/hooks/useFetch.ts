import { useEffect, useState } from "react"
import axios from "axios"
import { useCredentials } from "./useCredentials"

type params = {
  url: string
  method: "GET" | "POST" | "PUT" | "PATCH"
  body?: null | {}
  config?: {}
}

export function useFetch({ method, url, body, config }: params) {
  // const {token} = useCredentials()

  const [isLoading, setIsLoading] = useState(false)
  const [error, seterror] = useState<null | {}>(null)
  const [data, setData] = useState<null | []>(null)

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIxQGdtYWlsLmNvbSIsImlkIjoiMTEiLCJpYXQiOjE2OTQ1MzU0MTIsImV4cCI6MTcwNDUzNTQxMn0.Jwyipx3zL9D0RBHk79qN-HEUHqURrmyQe8ZaspRYdY0'

  function fetchData() {
    setIsLoading(true)

    if (method === "GET") {
      return axios
        .get(url, {headers: {Authorization: token}})
        .then((res) => setData(res.data))
        .catch((err) => seterror(err))
        .finally(() => setIsLoading(false))
    } else if (method === "POST") {
      return axios
        .post(url, body, { ...config })
        .then((res) => {
          setData(res.data)
          seterror(null)
        })
        .catch((err) => {
          seterror(err)
          setData(null)
        })
        .finally(() => setIsLoading(false))
    } else if (method === "PUT") {
      return axios
        .put(url, body, { ...config })
        .then((res) => setData(res.data))
        .catch((err) => seterror(err))
        .finally(() => setIsLoading(false))
    } else if (method === "PATCH") {
      return axios
        .patch(url, body, { ...config })
        .then((res) => setData(res.data))
        .catch((err) => seterror(err))
        .finally(() => setIsLoading(false))
    }
  }

  return {fetchData, isLoading, error, data }
}
