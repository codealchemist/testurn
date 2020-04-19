import React, { useState, useEffect } from 'react'
import { TextField, Button, FormControl } from '@material-ui/core'
import {
  Container,
  Title,
  Highlight,
  Description,
  FormContainer,
} from './elements'
import Status from './Status'
import { testTurnServer } from './methods'

function App() {
  const [isDisabled, setIsDisabled] = useState(true)
  const [url, setUrl] = useState()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [isOk, setIsOk] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const settersMap = {
    url: setUrl,
    username: setUsername,
    password: setPassword,
  }

  const onChange = (event) => {
    const { id, value } = event.target
    settersMap[id](value)
  }

  const onTest = async () => {
    if (isDisabled) return

    setIsLoading(true)
    const config = {
      url,
      username,
      credential: password,
    }
    const status = await testTurnServer(config)
    setIsLoading(false)
    setIsOk(status)
  }

  const onKey = (event) => {
    const key = (event.key || event.keyCode).toLowerCase()
    if (key === 'enter') {
      onTest()
      return
    }
  }

  useEffect(() => {
    if (!url || !username || !password) {
      setIsDisabled(true)
      return
    }
    setIsDisabled(false)
  }, [url, username, password])

  return (
    <Container>
      <Title>
        <Highlight>Tes</Highlight>
        TURN
      </Title>

      <Description>
        Simple TURN server tester. <br />
        Provide your turn server details to see if it's up and running.
      </Description>

      <Description>
        We use RTCPeerConnection to test it, which is the same browser API used
        when estalishing WebRTC P2P connections. <br />
        Read more at
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/setConfiguration">
          MDN: RTCPeerConnection.setConfiguration()
        </a>
      </Description>

      <Status isOk={isOk} isLoading={isLoading} />

      <FormContainer onKeyPress={onKey}>
        <FormControl fullWidth={true}>
          <TextField id="url" label="TURN server URL" onChange={onChange} />
          <TextField id="username" label="username" onChange={onChange} />
          <TextField id="password" label="password" onChange={onChange} />
          <Button variant="contained" disabled={isDisabled} onClick={onTest}>
            Test
          </Button>
        </FormControl>
      </FormContainer>
    </Container>
  )
}

export default App
