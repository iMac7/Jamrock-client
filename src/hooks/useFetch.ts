import { useEffect, useState } from "react"
import axios from "axios"

type params = {
  shouldFetch: boolean
  url: string
  method: "GET" | "POST" | "PUT" | "PATCH"
  body?: null | {}
  config?: {}
}

export function useFetch({ shouldFetch, method, url, body, config }: params) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, seterror] = useState<null | {}>(null)
  const [data, setData] = useState<null | []>(null)

  function fetchData() {
    console.log('fetch running')
    if (method === "GET") {
      return axios
        .get(url)
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

  useEffect(() => {
    if (shouldFetch) {
      fetchData()
    }
  }, [shouldFetch, url, JSON.stringify(body)])

  return { isLoading, error, data }
}
