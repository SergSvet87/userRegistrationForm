import { useState, useEffect } from 'react'

export const useFetch = (url) => {
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    setLoading(true)

    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        if (res.status === 404) {
          throw new Error('Oh, No!!! Not Found! 💥')
        }

        if (res.status === 500) {
          throw new Error('Oh, No!!! Server failed! 💥')
        }

        if (res.status === 502) {
          throw new Error('Oh, No!!! Bad Gateway failed! 💥')
        }

        throw new Error('Oh, No!!! Something went wrong: 💥')
      })
      .then((data) => {
        setResponse(data)
        setError(null)
        setLoading(false)
      })
      .catch((e) => {
        setLoading(false)
        setError(e.message)
      })
  }, [url])

  return { response, loading, error }
}
