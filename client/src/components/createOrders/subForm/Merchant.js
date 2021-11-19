import React, { useState, useContext } from 'react'
import createOrdersContext from '../../context/createOrdersContext'
import {
  TextField,
  Grid,
  FormLabel,
  Divider,
  Button,
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  Autocomplete,
} from '@mui/material'
import { useHistory, Redirect } from 'react-router-dom'
import { reqCreateOrders } from '../../../api'

const gridItemText = {
  mt: 1,
  mb: 1,
}

const pageStyle = {
  width: {
    xs: '100%',
    sm: '380px',
    xl: '380px',
  },
  // border: {
  //   xs: '1px yellow solid',
  //   sm: '1px red solid',
  //   xl: '1px green solid',
  // },
  height: '95vh',
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

const creatOrdersFn = async (formData) => {
  const response = await reqCreateOrders(formData) // {code: 0/1, user: {}, msg: ''}
  const result = response.data

  console.log('result in createOrder', result)
  if (result.status === 200) {
    console.log('checkoutUrl in createOrder', result.data.checkoutUrl)
    return result.data.checkoutUrl
  }
  return 'Faild to create Orders'
}

function MerchantInfo() {
  const val = useContext(createOrdersContext)
  console.log('val[0]: ', val[0])
  const history = useHistory()
  const [errMsg, setErrMsg] = useState('')
  const handleSubmit = async () => {
    if (val[0].merchant.redirectCancelUrl === '') {
      setErrMsg('RedirectCancelUrl is required!!')
    } else if (val[0].merchant.redirectConfirmUrl === '') {
      setErrMsg('RedirectConfirmUrl is required!!')
    } else {
      console.log('submit form to backend')
      const res = await creatOrdersFn(val[0])
      if (res !== 'Faild to create Orders') {
        window.location.href = res
      }
    }
  }
  const toItemsPage = () => {
    history.replace('/items')
  }

  return (
    <>
      <Box className="form" sx={pageStyle}>
        <div>
          <form>
            <FormLabel sx={formTopLabel} component="legend">
              Merchant
            </FormLabel>
            <div className="body-container">
              <Grid
                container
                alignItems="center"
                justify="center"
                direction="column"
              >
                {errMsg ? (
                  <Box
                    sx={{
                      color: 'red',
                      marginLeft: '1em',
                    }}
                  >
                    {errMsg}
                  </Box>
                ) : null}

                <Stack spacing={2} sx={{ width: 300 }}>
                  <Autocomplete
                    freeSolo
                    id="redirectCancelUrl"
                    disableClearable
                    value={val[0].merchant.redirectCancelUrl}
                    onChange={(e, values) => {
                      val[1]({
                        type: 'CREATE_ORDERS_UPDATE_MERCHANT_REDIRECTCANCELURL',
                        payload: values,
                      })
                    }}
                    options={[
                      'https://portal.staging.scalapay.com/failure-url',
                    ]}
                    renderInput={(params) => (
                      <TextField
                        required={true}
                        {...params}
                        label="redirectCancelUrl"
                        InputProps={{
                          ...params.InputProps,
                          type: 'text',
                        }}
                        onChange={(e) => {
                          val[1]({
                            type: 'CREATE_ORDERS_UPDATE_MERCHANT_REDIRECTCANCELURL',
                            payload: e.target.value,
                          })
                        }}
                      />
                    )}
                  />
                  <Divider />
                  <Autocomplete
                    freeSolo
                    id="redirectConfirmUrl"
                    disableClearable
                    value={val[0].merchant.redirectConfirmUrl}
                    onChange={(e, values) => {
                      val[1]({
                        type: 'CREATE_ORDERS_UPDATE_MERCHANT_REDIRECTCONFIRMURL',
                        payload: values,
                      })
                    }}
                    options={[
                      'https://portal.staging.scalapay.com/success-url',
                    ]}
                    renderInput={(params) => (
                      <TextField
                        required={true}
                        {...params}
                        label="redirectConfirmUrl"
                        InputProps={{
                          ...params.InputProps,
                          type: 'text',
                        }}
                        onChange={(e) => {
                          val[1]({
                            type: 'CREATE_ORDERS_UPDATE_MERCHANT_REDIRECTCONFIRMURL',
                            payload: e.target.value,
                          })
                        }}
                      />
                    )}
                  />
                  <Divider />
                  <Autocomplete
                    freeSolo
                    id="merchantReference"
                    disableClearable
                    value={val[0].merchantReference}
                    onChange={(e, values) => {
                      val[1]({
                        type: 'CREATE_ORDERS_UPDATE_MERCHANTREFERENCE',
                        payload: values,
                      })
                    }}
                    options={['merchantOrder-1234']}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="merchantReference"
                        InputProps={{
                          ...params.InputProps,
                          type: 'text',
                        }}
                        onChange={(e) => {
                          val[1]({
                            type: 'CREATE_ORDERS_UPDATE_MERCHANTREFERENCE',
                            payload: e.target.value,
                          })
                        }}
                      />
                    )}
                  />
                  <Divider />
                  <Card>
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        shippingAmount
                      </Typography>
                      <Autocomplete
                        freeSolo
                        id="amount"
                        disableClearable
                        value={val[0].shippingAmount.amount}
                        onChange={(e, values) => {
                          val[1]({
                            type: 'CREATE_ORDERS_UPDATE_SHIPPINGAMOUNT_AMOUNT',
                            payload: values,
                          })
                        }}
                        options={['10.00']}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="amount"
                            InputProps={{
                              ...params.InputProps,
                              type: 'text',
                            }}
                            onChange={(e) => {
                              val[1]({
                                type: 'CREATE_ORDERS_UPDATE_SHIPPINGAMOUNT_AMOUNT',
                                payload: e.target.value,
                              })
                            }}
                          />
                        )}
                      />
                      <Divider />
                      <Autocomplete
                        freeSolo
                        id="currency"
                        disableClearable
                        value={val[0].shippingAmount.currency}
                        onChange={(e, values) => {
                          val[1]({
                            type: 'CREATE_ORDERS_UPDATE_SHIPPINGAMOUNT_CURRENCY',
                            payload: values,
                          })
                        }}
                        options={['EUR']}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="currency"
                            InputProps={{
                              ...params.InputProps,
                              type: 'text',
                            }}
                            onChange={(e) => {
                              val[1]({
                                type: 'CREATE_ORDERS_UPDATE_SHIPPINGAMOUNT_CURRENCY',
                                payload: e.target.value,
                              })
                            }}
                          />
                        )}
                      />
                    </CardContent>
                  </Card>
                  <Divider />

                  <TextField
                    id="orderExpiryMilliseconds"
                    label="orderExpiryMilliseconds"
                    type="text"
                    placeholder="orderExpiryMilliseconds..."
                    value={val[0].orderExpiryMilliseconds}
                    onChange={(e) => {
                      val[1]({
                        type: 'CREATE_ORDERS_UPDATE_ORDEREXPIRYMILLISECONDS',
                        payload: e.target.value,
                      })
                    }}
                  />

                  {/* <Autocomplete
                    freeSolo
                    id="orderExpiryMilliseconds"
                    disableClearable
                    value={val[0].orderExpiryMilliseconds}
                    onChange={(e, values) => {
                      val[1]({
                        type: 'CREATE_ORDERS_UPDATE_ORDEREXPIRYMILLISECONDS',
                        payload: values,
                      })
                    }}
                    options={['600000']}
                    renderInput={(params) => (
                      <TextField
                        required={true}
                        {...params}
                        label="orderExpiryMilliseconds"
                        InputProps={{
                          ...params.InputProps,
                          type: 'text',
                        }}
                        onChange={(e) => {
                          val[1]({
                            type: 'CREATE_ORDERS_UPDATE_ORDEREXPIRYMILLISECONDS',
                            payload: e.target.value,
                          })
                        }}
                      />
                    )}
                  /> */}
                </Stack>

                {/* <Grid item alignItems="flex-start" sx={gridItemText}>
                  <TextField
                    required={true}
                    id="redirectCancelUrl"
                    label="redirectCancelUrl:"
                    type="text"
                    placeholder="https://portal.staging.scalapay.com/failure-url"
                    value={val[0].merchant.redirectCancelUrl}
                    onChange={(e) => {
                      val[1]({
                        type: 'CREATE_ORDERS_UPDATE_MERCHANT_REDIRECTCANCELURL',
                        payload: e.target.value,
                      })
                    }}
                  />
                </Grid>
                <Divider />
                <Grid item alignItems="flex-start" sx={gridItemText}>
                  <TextField
                    required={true}
                    id="redirectConfirmUrl"
                    label="redirectConfirmUrl"
                    type="text"
                    placeholder="https://portal.staging.scalapay.com/success-url"
                    value={val[0].merchant.redirectConfirmUrl}
                    onChange={(e) => {
                      val[1]({
                        type: 'CREATE_ORDERS_UPDATE_MERCHANT_REDIRECTCONFIRMURL',
                        payload: e.target.value,
                      })
                    }}
                  />
                </Grid>
                <Divider />
                <Grid item alignItems="flex-start" sx={gridItemText}>
                  <TextField
                    id="merchantReference"
                    label="merchantReference"
                    type="text"
                    placeholder="merchantReference..."
                    value={val[0].merchantReference}
                    onChange={(e) => {
                      val[1]({
                        type: 'CREATE_ORDERS_UPDATE_MERCHANTREFERENCE',
                        payload: e.target.value,
                      })
                    }}
                  />
                </Grid>
                <Divider />
                <Card>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      shippingAmount
                    </Typography>
                    <Grid item alignItems="flex-start" sx={gridItemText}>
                      <TextField
                        id="amount"
                        label="amount"
                        type="text"
                        placeholder="amount..."
                        value={val[0].shippingAmount.amount}
                        onChange={(e) => {
                          val[1]({
                            type: 'CREATE_ORDERS_UPDATE_SHIPPINGAMOUNT_AMOUNT',
                            payload: e.target.value,
                          })
                        }}
                      />
                    </Grid>
                    <Divider />
                    <Grid item alignItems="flex-start" sx={gridItemText}>
                      <TextField
                        id="currency"
                        label="currency"
                        type="text"
                        placeholder="currency..."
                        value={val[0].shippingAmount.currency}
                        onChange={(e) => {
                          val[1]({
                            type: 'CREATE_ORDERS_UPDATE_SHIPPINGAMOUNT_CURRENCY',
                            payload: e.target.value,
                          })
                        }}
                      />
                    </Grid>
                  </CardContent>
                </Card>
                <Divider />
                <Grid item alignItems="flex-start" sx={gridItemText}>
                  <TextField
                    id="orderExpiryMilliseconds"
                    label="orderExpiryMilliseconds"
                    type="text"
                    placeholder="orderExpiryMilliseconds..."
                    value={val[0].orderExpiryMilliseconds}
                    onChange={(e) => {
                      val[1]({
                        type: 'CREATE_ORDERS_UPDATE_ORDEREXPIRYMILLISECONDS',
                        payload: e.target.value,
                      })
                    }}
                  />
                </Grid> */}
              </Grid>
            </div>
          </form>
        </div>

        <div>
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            onClick={toItemsPage}
            fullWidth
          >
            Previous
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleSubmit}
          >
            {/* {page === FormTitle.length - 1 ? 'Submit' : 'Next'}{' '} */}
            Submit
          </Button>
        </div>
      </Box>
    </>
  )
}

export default MerchantInfo
