import { useState, useEffect } from 'react'

export const useFetchPostData = (url, userData) => {
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [errorMessage, setErrorMessage] = useState()

  useEffect(() => {
    const user = {
      name: userData.email,
      password: userData.password,
      passwordConfirmation: userData.passwordConfirmation,
    }

    setLoading(true)
    setError('')

    fetch(url, {
      body: JSON.stringify(user),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }

        throw new Error('Oh, No!!! Something went wrong: 💥!!!', {
          cause: res.status,
        })
      })
      .then((data) => {
        setResponse(data)
        setError(null)
        setLoading(false)
      })
      .catch((err) => {
        console.dir(err)
        setLoading(false)
        setError(err)
        setErrorMessage(err.message)
      })
  }, [url, userData])

  return { response, loading, error, errorMessage }
}
