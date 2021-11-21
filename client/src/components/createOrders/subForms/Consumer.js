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

function Consumer() {
  const val = useContext(createOrdersContext)
  console.log('val[0]: ', val[0])
  const history = useHistory()
  const [errMsg, setErrMsg] = useState('')
  const toBillingPage = () => {
    if (val[0].consumer.givenNames === '') {
      setErrMsg('GivenNames is required!!')
    } else if (val[0].consumer.surname === '') {
      setErrMsg('Surname is required!!')
    } else {
      history.replace('/billing')
    }
  }
  const toTotalAmountPage = () => {
    history.replace('/totalAmount')
  }

  return (
    <>
      <Box className="form" sx={pageStyle}>
        <div>
          <form>
            <FormLabel sx={formTopLabel} component="legend">
              Consumer
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
                    id="phoneNumber"
                    disableClearable
                    value={val[0].consumer.phoneNumber}
                    onChange={(e, values) => {
                      val[1]({
                        type: 'CREATE_ORDERS_UPDATE_CONSUMER_PHONENUMBER',
                        payload: values,
                      })
                    }}
                    options={['0400000001']}
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
                            type: 'CREATE_ORDERS_UPDATE_CONSUMER_PHONENUMBER',
                            payload: e.target.value,
                          })
                        }}
                      />
                    )}
                  />
                  <Divider />

                  <Autocomplete
                    freeSolo
                    id="givenNames"
                    disableClearable
                    value={val[0].consumer.givenNames}
                    onChange={(e, values) => {
                      val[1]({
                        type: 'CREATE_ORDERS_UPDATE_CONSUMER_GIVENNAMES',
                        payload: values,
                      })
                    }}
                    options={['Joe']}
                    renderInput={(params) => (
                      <TextField
                        required={true}
                        {...params}
                        label="givenNames"
                        InputProps={{
                          ...params.InputProps,
                          type: 'text',
                        }}
                        onChange={(e) => {
                          val[1]({
                            type: 'CREATE_ORDERS_UPDATE_CONSUMER_GIVENNAMES',
                            payload: e.target.value,
                          })
                        }}
                      />
                    )}
                  />
                  <Divider />
                  <TextField
                    required={true}
                    id="surname"
                    label="surname"
                    type="text"
                    placeholder=""
                    value={val[0].consumer.surname}
                    onChange={(e) => {
                      val[1]({
                        type: 'CREATE_ORDERS_UPDATE_CONSUMER_SURNAME',
                        payload: e.target.value,
                      })
                    }}
                  />
                  <Divider />

                  <Autocomplete
                    freeSolo
                    id="email"
                    disableClearable
                    value={val[0].consumer.email}
                    onChange={(e, values) => {
                      val[1]({
                        type: 'CREATE_ORDERS_UPDATE_CONSUMER_EMAIL',
                        payload: values,
                      })
                    }}
                    options={['test@scalapay.com']}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="email"
                        InputProps={{
                          ...params.InputProps,
                          type: 'text',
                        }}
                        onChange={(e) => {
                          val[1]({
                            type: 'CREATE_ORDERS_UPDATE_CONSUMER_EMAIL',
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
            onClick={toTotalAmountPage}
            fullWidth
          >
            Previous
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            onClick={toBillingPage}
          >
            Next
          </Button>
        </div>
      </Box>
    </>
  )
}

export default Consumer
