import { useState } from 'react'

import { Form } from './components/Form.jsx'
import { ServerRequest } from './components/ServerRequest.jsx'
import ErrorBoundary from './components/ErrorBoundary'
import { Modal } from './ui/Modal'

import './App.scss'

export default function App() {
  const [responseServer, setResponseServer] = useState(null)
  const [userData, setUserData] = useState(null)

  const getUserData = data => setUserData(data)
  const getServerResponse = response => setResponseServer(response)

  return (
    <main>
      {responseServer ? <Modal res={responseServer} /> :
        <Form getUserData={getUserData} />}
      <ErrorBoundary>
        {userData ? <ServerRequest userInfo={userData} getServerResponse={getServerResponse} /> : ''}
      </ErrorBoundary>
    </main>
  )
}
