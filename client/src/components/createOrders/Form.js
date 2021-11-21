import React, { useState, useEffect } from 'react'
import TotalAmount from './subForms/TotalAmount'
import Consumer from './subForms/Consumer'
import Billing from './subForms/Billing'
import Shipping from './subForms/Shipping'
import Items from './subForms/Items'
import Merchant from './subForms/Merchant'

import { Box, CircularProgress, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress'

import { useLocation, useHistory } from 'react-router-dom'
import { Route, Switch } from 'react-router'

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
  alignItems: 'space-between',
  flexGrow: 1,
  flexShrink: 1,
}

const formTopLabel = {
  width: '100%',
  height: '50px',
  textAlign: 'center',
  lineHeight: '50px',
}

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}))

function Form() {
  const location = useLocation()
  const history = useHistory()

  console.log('location in Form: ', location)
  console.log('history in Form: ', history)

  const [waitRes, setWaitRes] = useState(false)

  const FormTitle = [
    '/totalAmount',
    '/consumer',
    '/billing',
    '/shipping',
    '/items',
    '/merchant',
  ]
  const [progressWidth, setProgressWidth] = useState(0)
  let path = location.pathname
  useEffect(() => {
    console.log('path in Form page: ', path)

    if (path === '/') {
      history.replace('/totalAmount')
    }

    let page = FormTitle.findIndex((item) => item === path)
    if (page !== -1) {
      setProgressWidth((page + 1) * (100 / 6))
    }
  }, [path])

  return (
    <>
      {waitRes ? (
        <Box
          sx={{
            height: '100vh',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{ fontSize: 25, mb: 2 }}
            color="text.secondary"
            gutterBottom
          >
            Orders creating
          </Typography>
          <CircularProgress />
        </Box>
      ) : (
        <Box className="form" sx={pageStyle}>
          <div>
            <Box
              color="secondary"
              sx={{
                width: '92%',
                height: '15px',
                left: 2,
                mt: 2,
                ml: 2,
              }}
            >
              <BorderLinearProgress
                data-testid="linearProgress"
                variant="determinate"
                value={progressWidth}
              />
            </Box>
          </div>
          <div>
            <Route path="/totalAmount">
              <TotalAmount />
            </Route>
            <Route path="/consumer">
              <Consumer />
            </Route>
            <Route path="/billing">
              <Billing />
            </Route>
            <Route path="/shipping">
              <Shipping />
            </Route>
            <Route path="/items">
              <Items />
            </Route>
            <Route path="/merchant">
              <Merchant waitRes={waitRes} setWaitRes={setWaitRes} />
            </Route>
          </div>
        </Box>
      )}
    </>
  )
}

export default Form
