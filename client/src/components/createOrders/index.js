import React, { FC, useReducer } from 'react'
import createOrdersReducer from './createOrdersReducer'
import createOrdersContext from '../context/createOrdersContext'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Form from './Form'

const userReducer = {
  totalAmount: {
    amount: '',
    currency: '',
  },
  consumer: {
    givenNames: '',
    phoneNumber: '',
    surname: '',
    email: '',
  },
  billing: {
    phoneNumber: '',
    countryCode: '',
    name: '',
    postcode: '',
    suburb: '',
    line1: '',
  },
  shipping: {
    phoneNumber: '',
    countryCode: '',
    name: '',
    postcode: '',
    suburb: '',
    line1: '',
  },
  items: [
    {
      price: {
        amount: '',
        currency: '',
      },
      quantity: 1,
      gtin: '',
      name: '',
      category: '',
      sku: '',
      brand: '',
    },
  ],
  merchant: {
    redirectCancelUrl: '',
    redirectConfirmUrl: '',
  },
  shippingAmount: {
    amount: '',
    currency: '',
  },
  orderExpiryMilliseconds: 600000,
  merchantReference: '',
}

const { Provider } = createOrdersContext

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(createOrdersReducer, userReducer)
  const store = React.useMemo(() => [state, dispatch], [state])
  console.log('store in createOrders context value: ', store)
  return <Provider value={store}> {children} </Provider>
}

const index = () => {
  return (
    <div className="direct-communicate">
      <StoreProvider>
        <HashRouter>
          <Switch>
            <Route component={Form}></Route>
          </Switch>
        </HashRouter>
      </StoreProvider>
    </div>
  )
}

export default index