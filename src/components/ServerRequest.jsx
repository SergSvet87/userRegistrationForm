import { useState, useEffect } from 'react'

import { Loader } from '../ui/Loader/Loader'
import { useFetchPostData } from '../hooks/useFetchPostData'
import { USER_URL } from '../urls'
import { ErrorMessage } from '../ui/ErrorMessage'

export const ServerRequest = ({ userInfo, getServerResponse }) => {
  const [userData, setUserData] = useState(userInfo)
  const { response, loading, error, errorMessage } = useFetchPostData(
    USER_URL,
    userData
  )

  function resultReceived(response) {
    getServerResponse(response)
  }

  useEffect(() => {
    setUserData(userInfo)
  }, [userInfo])

  if (loading) {
    return <Loader />
  }

  if (response) {
    resultReceived(response)
  }

  return error ? (
    <div className="error">
      {errorMessage} <ErrorMessage errorNumber={error.cause} />
    </div>
  ) : (
    ''
  )
}
