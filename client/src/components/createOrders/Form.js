import React, { useState, useEffect } from 'react'
import TotalAmount from './subForm/TotalAmount'
import Consumer from './subForm/Consumer'
import Billing from './subForm/Billing'
import Shipping from './subForm/Shipping'
import Items from './subForm/Items'
import Merchant from './subForm/Merchant'

import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress'

import { useLocation, useHistory } from 'react-router-dom'
import { Router, Route, Switch } from 'react-router'

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
  // maxHeight: '100vh',
  // // overflow: 'hidden',
  // overflowY: 'scroll',
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

const routes = {
  '/totalAmount': () => <TotalAmount />,
  '/consumer': () => <Consumer />,
  '/billing': () => <Billing />,
  '/shipping': () => <Shipping />,
  '/items': () => <Items />,
}

function Form() {
  // const [page, setPage] = useState(0)
  const location = useLocation()
  const history = useHistory()

  console.log('location in Form: ', location)
  console.log('history in Form: ', history)

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
        <Switch>
          <Route path="/totalAmount" component={TotalAmount} />
          <Route path="/consumer" component={Consumer} />
          <Route path="/billing" component={Billing} />
          <Route path="/shipping" component={Shipping} />
          <Route path="/items" component={Items} />
          <Route path="/merchant" component={Merchant} />
        </Switch>
      </div>
    </Box>
  )
}

export default Form
