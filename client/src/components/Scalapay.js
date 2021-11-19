import React, {
  useRef,
  FC,
  ReactElement,
  useState,
  useReducer,
  useContext,
  useEffect,
} from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Card,
  List,
  ListItem,
  Divider,
  TextField,
  Button,
  Box,
} from '@mui/material'
import { useHistory } from 'react-router-dom'

const pageStyle = {
  width: {
    xs: '100%',
    sm: '380px',
    xl: '380px',
  },
  border: {
    xs: '1px yellow solid',
    sm: '1px red solid',
    xl: '1px green solid',
  },
  height: '100vh',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flexGrow: 1,
  flexShrink: 1,
}

function Form() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    const loginInfo = { username, password }
    console.log('form data in index: ', loginInfo)
    // loginFunc(val, loginInfo);
  }

  const history = useHistory()
  const toLoginPage = () => {
    history.replace('register')
  }

  useEffect(() => {
    console.log('Username in index: ', username)
    console.log('Password in index: ', password)
  }, [username, password])

  return (
    <Box sx={pageStyle}>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h5"
              sx={{
                width: '100%',
                textAlign: 'center',
              }}
            >
              Direct communication
            </Typography>
          </Toolbar>
        </AppBar>
        <form>
          <Card>
            <List sx={{ width: '100%' }}>
              <ListItem alignItems="flex-start">
                <TextField
                  placeholder="Please enter user name"
                  id="totalAmount"
                  label="totalAmount:"
                  variant="outlined"
                  sx={{ width: '100%' }}
                  value={username}
                  // onChange={handleUsernameChange}
                  // inputRef={usernameRef}
                  inputProps={{
                    autoComplete: 'new-password',
                  }}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </ListItem>
              <Divider />
              <ListItem alignItems="flex-start">
                <TextField
                  placeholder="Please enter 6 digits password"
                  id="password"
                  label="Password:"
                  variant="outlined"
                  sx={{ width: '100%' }}
                  type="password"
                  // onChange={handlePasswordChange}
                  // inputRef={passwordRef}
                  inputProps={{
                    autoComplete: 'new-password',
                  }}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </ListItem>
            </List>
          </Card>
        </form>
      </div>
      <div>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          sx={{
            width: '100%',
            marginTop: 5,
          }}
          fullWidth
          onClick={handleSubmit}
        >
          Login
        </Button>
      </div>
    </Box>
  )
}

export default Form
