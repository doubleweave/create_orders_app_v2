import React, { useState, useContext } from 'react'
import createOrdersContext from '../../context/createOrdersContext'
import {
  TextField,
  Grid,
  FormLabel,
  Divider,
  Button,
  Box,
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

function Billing() {
  const val = useContext(createOrdersContext)
  console.log('val[0]: ', val[0])

  const history = useHistory()
  const toShippingPage = () => {
    history.replace('/shipping')
  }
  const toConsumerPage = () => {
    history.replace('/consumer')
  }

  return (
    <>
      <Box className="form" sx={pageStyle}>
        <div>
          <form>
            <FormLabel sx={formTopLabel} component="legend">
              Billing
            </FormLabel>
            <div className="body-container">
              <Grid
                container
                alignItems="center"
                justify="center"
                direction="column"
              >
                <Stack spacing={2} sx={{ width: 300 }}>
                  <Autocomplete
                    freeSolo
                    id="phoneNumber"
                    disableClearable
                    value={val[0].billing.phoneNumber}
                    onChange={(e, values) => {
                      val[1]({
                        type: 'CREATE_ORDERS_UPDATE_BILLING_PHONENUMBER',
                        payload: values,
                      })
                    }}
                    options={['0400000000']}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="phoneNumber"
                        InputProps={{
                          ...params.InputProps,
                          type: 'text',
                        }}
                        onChange={(e) => {
                          val[1]({
                            type: 'CREATE_ORDERS_UPDATE_BILLING_PHONENUMBER',
                            payload: e.target.value,
                          })
                        }}
                      />
                    )}
                  />
                  <Divider />
                  <Autocomplete
                    freeSolo
                    id="countryCode"
                    disableClearable
                    value={val[0].billing.countryCode}
                    onChange={(e, values) => {
                      val[1]({
                        type: 'CREATE_ORDERS_UPDATE_BILLING_COUNTRYCODE',
                        payload: values,
                      })
                    }}
                    options={['IT']}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="countryCode"
                        InputProps={{
                          ...params.InputProps,
                          type: 'text',
                        }}
                        onChange={(e) => {
                          val[1]({
                            type: 'CREATE_ORDERS_UPDATE_BILLING_COUNTRYCODE',
                            payload: e.target.value,
                          })
                        }}
                      />
                    )}
                  />
                  <Divider />

                  <Autocomplete
                    freeSolo
                    id="name"
                    disableClearable
                    value={val[0].billing.name}
                    onChange={(e, values) => {
                      val[1]({
                        type: 'CREATE_ORDERS_UPDATE_BILLING_NAME',
                        payload: values,
                      })
                    }}
                    options={['Joe Consumer']}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="name"
                        InputProps={{
                          ...params.InputProps,
                          type: 'text',
                        }}
                        onChange={(e) => {
                          val[1]({
                            type: 'CREATE_ORDERS_UPDATE_BILLING_NAME',
                            payload: e.target.value,
                          })
                        }}
                      />
                    )}
                  />
                  <Divider />

                  <Autocomplete
                    freeSolo
                    id="postcode"
                    disableClearable
                    value={val[0].billing.postcode}
                    onChange={(e, values) => {
                      val[1]({
                        type: 'CREATE_ORDERS_UPDATE_BILLING_POSTCODE',
                        payload: values,
                      })
                    }}
                    options={['50056']}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="postcode"
                        InputProps={{
                          ...params.InputProps,
                          type: 'text',
                        }}
                        onChange={(e) => {
                          val[1]({
                            type: 'CREATE_ORDERS_UPDATE_BILLING_POSTCODE',
                            payload: e.target.value,
                          })
                        }}
                      />
                    )}
                  />
                  <Divider />

                  <Autocomplete
                    freeSolo
                    id="suburb"
                    disableClearable
                    value={val[0].billing.suburb}
                    onChange={(e, values) => {
                      val[1]({
                        type: 'CREATE_ORDERS_UPDATE_BILLING_SUBURB',
                        payload: values,
                      })
                    }}
                    options={['Montelupo Fiorentino']}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="suburb"
                        InputProps={{
                          ...params.InputProps,
                          type: 'text',
                        }}
                        onChange={(e) => {
                          val[1]({
                            type: 'CREATE_ORDERS_UPDATE_BILLING_SUBURB',
                            payload: e.target.value,
                          })
                        }}
                      />
                    )}
                  />
                  <Divider />

                  <Autocomplete
                    freeSolo
                    id="line1"
                    disableClearable
                    value={val[0].billing.line1}
                    onChange={(e, values) => {
                      val[1]({
                        type: 'CREATE_ORDERS_UPDATE_BILLING_LINE1',
                        payload: values,
                      })
                    }}
                    options={['Via della Rosa, 58']}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="line1"
                        InputProps={{
                          ...params.InputProps,
                          type: 'text',
                        }}
                        onChange={(e) => {
                          val[1]({
                            type: 'CREATE_ORDERS_UPDATE_BILLING_LINE1',
                            payload: e.target.value,
                          })
                        }}
                      />
                    )}
                  />
                </Stack>
              </Grid>
            </div>
          </form>
        </div>

        <div>
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            onClick={toConsumerPage}
            fullWidth
          >
            Previous
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            onClick={toShippingPage}
          >
            Next
          </Button>
        </div>
      </Box>
    </>
  )
}

export default Billing
