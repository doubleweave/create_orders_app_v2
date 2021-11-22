import React, { useState, useContext } from 'react'
import createOrdersContext from '../../context/createOrdersContext'
import {
  TextField,
  Grid,
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
  height: '80vh',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'space-between',
  flexGrow: 1,
  flexShrink: 1,
  overflowY: 'scroll',
}

const formTopLabel = {
  width: '100%',
  height: '50px',
  textAlign: 'center',
  lineHeight: '50px',
}

function Item({ itemIndex }) {
  const val = useContext(createOrdersContext)
  console.log('val[0]: ', val[0])
  const history = useHistory()

  return (
    <>
      <Box className="form" sx={pageStyle}>
        <div>
          <form>
            {/* <FormLabel sx={formTopLabel} component="legend">
              Object
            </FormLabel> */}
            <div className="body-container">
              <Paper sx={{}}>
                <Grid
                  container
                  alignItems="center"
                  justify="center"
                  direction="column"
                >
                  <Stack spacing={2} sx={{ width: 300 }}>
                    <Autocomplete
                      sx={{ mt: 1 }}
                      freeSolo
                      id="gtin"
                      disableClearable
                      value={val[0].items[itemIndex].gtin}
                      onChange={(e, value) => {
                        val[1]({
                          type: 'CREATE_ORDERS_UPDATE_ITEMS_GTIN',
                          payload: { value, itemIndex },
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
                            const value = e.target.value
                            val[1]({
                              type: 'CREATE_ORDERS_UPDATE_ITEMS_GTIN',
                              payload: { value, itemIndex },
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
                      value={val[0].items[itemIndex].quantity}
                      onChange={(e) => {
                        const value = e.target.value
                        val[1]({
                          type: 'CREATE_ORDERS_UPDATE_ITEMS_QUANTITY',
                          payload: { value, itemIndex },
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
                          value={val[0].items[itemIndex].price.amount}
                          onChange={(e, value) => {
                            val[1]({
                              type: 'CREATE_ORDERS_UPDATE_ITEMS_PRICE_AMOUNT',
                              payload: { value, itemIndex },
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
                                const value = e.target.value
                                val[1]({
                                  type: 'CREATE_ORDERS_UPDATE_ITEMS_PRICE_AMOUNT',
                                  payload: { value, itemIndex },
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
                          value={val[0].items[itemIndex].price.currency}
                          onChange={(e, value) => {
                            val[1]({
                              type: 'CREATE_ORDERS_UPDATE_ITEMS_PRICE_CURRENCY',
                              payload: { value, itemIndex },
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
                                const value = e.target.value
                                val[1]({
                                  type: 'CREATE_ORDERS_UPDATE_ITEMS_PRICE_CURRENCY',
                                  payload: { value, itemIndex },
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
                      value={val[0].items[itemIndex].name}
                      onChange={(e, value) => {
                        val[1]({
                          type: 'CREATE_ORDERS_UPDATE_ITEMS_NAME',
                          payload: { value, itemIndex },
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
                            const value = e.target.value
                            val[1]({
                              type: 'CREATE_ORDERS_UPDATE_ITEMS_NAME',
                              payload: { value, itemIndex },
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
                      value={val[0].items[itemIndex].category}
                      onChange={(e, value) => {
                        val[1]({
                          type: 'CREATE_ORDERS_UPDATE_ITEMS_CATEGORY',
                          payload: { value, itemIndex },
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
                            const value = e.target.value
                            val[1]({
                              type: 'CREATE_ORDERS_UPDATE_ITEMS_CATEGORY',
                              payload: { value, itemIndex },
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
                      value={val[0].items[itemIndex].sku}
                      onChange={(e, value) => {
                        val[1]({
                          type: 'CREATE_ORDERS_UPDATE_ITEMS_SKU',
                          payload: { value, itemIndex },
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
                            const value = e.target.value
                            val[1]({
                              type: 'CREATE_ORDERS_UPDATE_ITEMS_SKU',
                              payload: { value, itemIndex },
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
                      value={val[0].items[itemIndex].brand}
                      onChange={(e, value) => {
                        val[1]({
                          type: 'CREATE_ORDERS_UPDATE_ITEMS_BRAND',
                          payload: { value, itemIndex },
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
                            const value = e.target.value
                            val[1]({
                              type: 'CREATE_ORDERS_UPDATE_ITEMS_BRAND',
                              payload: { value, itemIndex },
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
      </Box>
    </>
  )
}

export default Item
