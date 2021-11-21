import React, { useState, useContext } from 'react'
import createOrdersContext from '../../context/createOrdersContext'
import {
  TextField,
  Grid,
  FormLabel,
  Button,
  Box,
  Paper,
  Divider,
  Card,
  CardContent,
  Typography,
  Stack,
  Autocomplete,
} from '@mui/material'
import { useHistory, Redirect } from 'react-router-dom'

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
  height: '95vh',
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

function Item() {
  const val = useContext(createOrdersContext)
  console.log('val[0]: ', val[0])
  const history = useHistory()
  const [errMsg, setErrMsg] = useState('')
  const toMerchantPage = () => {
    if (val[0].items[0].quantity === '') {
      setErrMsg('Quantity is required!!')
    } else if (val[0].items[0].price.amount === '') {
      setErrMsg('Price amount field is required!!')
    } else if (val[0].items[0].price.currency === '') {
      setErrMsg('Price currency field  is required!!')
    } else if (val[0].items[0].name === '') {
      setErrMsg('Name field is required!!')
    } else if (val[0].items[0].category === '') {
      setErrMsg('Category field is required!!')
    } else if (val[0].items[0].sku === '') {
      setErrMsg('Sku field is required!!')
    } else {
      history.replace('/merchant')
    }
  }
  const toShippingPage = () => {
    history.replace('/shipping')
  }

  return (
    <>
      <Box className="form" sx={pageStyle}>
        <div>
          <form>
            <FormLabel sx={formTopLabel} component="legend">
              Object
            </FormLabel>
            <div className="body-container">
              <Paper
                sx={{
                  maxHeight: '500px',
                  overflowY: 'scroll',
                }}
              >
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
                      sx={{ mt: 1 }}
                      freeSolo
                      id="gtin"
                      disableClearable
                      value={val[0].items[0].gtin}
                      onChange={(e, values) => {
                        val[1]({
                          type: 'CREATE_ORDERS_UPDATE_ITEMS_GTIN',
                          payload: values,
                        })
                      }}
                      options={['123458791330']}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="gtin"
                          InputProps={{
                            ...params.InputProps,
                            type: 'text',
                          }}
                          onChange={(e) => {
                            val[1]({
                              type: 'CREATE_ORDERS_UPDATE_ITEMS_GTIN',
                              payload: e.target.value,
                            })
                          }}
                        />
                      )}
                    />
                    <Divider />
                    <TextField
                      required={true}
                      id="quantity"
                      label="quantity"
                      type="text"
                      placeholder="1"
                      value={val[0].items[0].quantity}
                      onChange={(e) => {
                        val[1]({
                          type: 'CREATE_ORDERS_UPDATE_ITEMS_QUANTITY',
                          payload: e.target.value,
                        })
                      }}
                    />
                    <Divider />

                    <Card>
                      <CardContent>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          Price
                        </Typography>
                        <Autocomplete
                          sx={{ mt: 1, mb: 1 }}
                          freeSolo
                          id="amount"
                          disableClearable
                          value={val[0].items[0].price.amount}
                          onChange={(e, values) => {
                            val[1]({
                              type: 'CREATE_ORDERS_UPDATE_ITEMS_PRICE_AMOUNT',
                              payload: values,
                            })
                          }}
                          options={['10.00']}
                          renderInput={(params) => (
                            <TextField
                              required={true}
                              {...params}
                              label="amount"
                              InputProps={{
                                ...params.InputProps,
                                type: 'text',
                              }}
                              onChange={(e) => {
                                val[1]({
                                  type: 'CREATE_ORDERS_UPDATE_ITEMS_PRICE_AMOUNT',
                                  payload: e.target.value,
                                })
                              }}
                            />
                          )}
                        />
                        <Divider />
                        <Autocomplete
                          sx={{ mt: 1, mb: 1 }}
                          freeSolo
                          id="currency"
                          disableClearable
                          value={val[0].items[0].price.currency}
                          onChange={(e, values) => {
                            val[1]({
                              type: 'CREATE_ORDERS_UPDATE_ITEMS_PRICE_CURRENCY',
                              payload: values,
                            })
                          }}
                          options={['EUR']}
                          renderInput={(params) => (
                            <TextField
                              required={true}
                              {...params}
                              label="currency"
                              InputProps={{
                                ...params.InputProps,
                                type: 'text',
                              }}
                              onChange={(e) => {
                                val[1]({
                                  type: 'CREATE_ORDERS_UPDATE_ITEMS_PRICE_CURRENCY',
                                  payload: e.target.value,
                                })
                              }}
                            />
                          )}
                        />
                      </CardContent>
                    </Card>
                    <Divider />
                    <Autocomplete
                      freeSolo
                      id="name"
                      disableClearable
                      value={val[0].items[0].name}
                      onChange={(e, values) => {
                        val[1]({
                          type: 'CREATE_ORDERS_UPDATE_ITEMS_NAME',
                          payload: values,
                        })
                      }}
                      options={['T-Shirt']}
                      renderInput={(params) => (
                        <TextField
                          required={true}
                          {...params}
                          label="name"
                          InputProps={{
                            ...params.InputProps,
                            type: 'text',
                          }}
                          onChange={(e) => {
                            val[1]({
                              type: 'CREATE_ORDERS_UPDATE_ITEMS_NAME',
                              payload: e.target.value,
                            })
                          }}
                        />
                      )}
                    />
                    <Divider />
                    <Autocomplete
                      freeSolo
                      id="category"
                      disableClearable
                      value={val[0].items[0].category}
                      onChange={(e, values) => {
                        val[1]({
                          type: 'CREATE_ORDERS_UPDATE_ITEMS_CATEGORY',
                          payload: values,
                        })
                      }}
                      options={['clothes']}
                      renderInput={(params) => (
                        <TextField
                          required={true}
                          {...params}
                          label="category"
                          InputProps={{
                            ...params.InputProps,
                            type: 'text',
                          }}
                          onChange={(e) => {
                            val[1]({
                              type: 'CREATE_ORDERS_UPDATE_ITEMS_CATEGORY',
                              payload: e.target.value,
                            })
                          }}
                        />
                      )}
                    />
                    <Divider />
                    <Autocomplete
                      freeSolo
                      id="sku"
                      disableClearable
                      value={val[0].items[0].sku}
                      onChange={(e, values) => {
                        val[1]({
                          type: 'CREATE_ORDERS_UPDATE_ITEMS_SKU',
                          payload: values,
                        })
                      }}
                      options={['12341234']}
                      renderInput={(params) => (
                        <TextField
                          required={true}
                          {...params}
                          label="sku"
                          InputProps={{
                            ...params.InputProps,
                            type: 'text',
                          }}
                          onChange={(e) => {
                            val[1]({
                              type: 'CREATE_ORDERS_UPDATE_ITEMS_SKU',
                              payload: e.target.value,
                            })
                          }}
                        />
                      )}
                    />
                    <Divider />
                    <Autocomplete
                      freeSolo
                      id="brand"
                      disableClearable
                      value={val[0].items[0].brand}
                      onChange={(e, values) => {
                        val[1]({
                          type: 'CREATE_ORDERS_UPDATE_ITEMS_BRAND',
                          payload: values,
                        })
                      }}
                      options={['TopChoice']}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="brand"
                          InputProps={{
                            ...params.InputProps,
                            type: 'text',
                          }}
                          onChange={(e) => {
                            val[1]({
                              type: 'CREATE_ORDERS_UPDATE_ITEMS_BRAND',
                              payload: e.target.value,
                            })
                          }}
                        />
                      )}
                    />
                  </Stack>
                </Grid>
              </Paper>
            </div>
          </form>
        </div>

        <div>
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            onClick={toShippingPage}
            fullWidth
          >
            Previous
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            onClick={toMerchantPage}
          >
            Next
          </Button>
        </div>
      </Box>
    </>
  )
}

export default Item
