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
import { useHistory } from 'react-router-dom'

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

const amountDefault = [{ amount: '190.00' }]

function TotalAmount() {
  // get state and dispatch from context
  // val[0]: state
  // val[1]: dispatch function
  const val = useContext(createOrdersContext)
  console.log('val[0]: ', val)
  const history = useHistory()

  // if required field is empty, errMsg will be displayed
  const [errMsg, setErrMsg] = useState('')
  const toConsumerPage = () => {
    if (val[0].totalAmount.amount === '') {
      setErrMsg('Amount field is required!!')
    } else if (val[0].totalAmount.currency === '') {
      setErrMsg('Currency field is required!!')
    } else {
      history.replace('/consumer')
    }
  }

  return (
    <>
      <Box className="form" sx={pageStyle}>
        <div>
          <form>
            <FormLabel sx={formTopLabel} component="legend">
              TotalAmount
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
                  {/* Autocomplete module: show default value */}
                  <Autocomplete
                    freeSolo
                    id="amount"
                    disableClearable
                    className="totalAmount_amount"
                    data-testid="autocomplete"
                    value={val[0].totalAmount.amount}
                    // onchange for drop down list
                    onChange={(e, values) => {
                      val[1]({
                        type: 'CREATE_ORDERS_UPDATE_TOTALAMOUNT_AMOUNT',
                        payload: values,
                      })
                    }}
                    options={amountDefault.map((option) => option.amount)}
                    renderInput={(params) => (
                      <TextField
                        className="totalAmount_amount_input"
                        required={true}
                        {...params}
                        label="Amount"
                        InputProps={{
                          ...params.InputProps,
                          type: 'text',
                        }}
                        // onChange for textField
                        onChange={(e) => {
                          val[1]({
                            type: 'CREATE_ORDERS_UPDATE_TOTALAMOUNT_AMOUNT',
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
                    value={val[0].totalAmount.currency}
                    onChange={(e, values) => {
                      val[1]({
                        type: 'CREATE_ORDERS_UPDATE_TOTALAMOUNT_CURRENCY',
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
                            type: 'CREATE_ORDERS_UPDATE_TOTALAMOUNT_CURRENCY',
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
            onClick={() => {
              val[1]({
                type: 'SET_DEFAULT_VALUE_FOR_CREATE_ORDERS',
                payload: '',
              })
            }}
            fullWidth
          >
            {/* button to fill default value into form, for testing only */}
            Default value for testing
          </Button>
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            disabled
            fullWidth
          >
            {/* back to previous page */}
            Previous
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            onClick={toConsumerPage}
          >
            Next
          </Button>
        </div>
      </Box>
    </>
  )
}

export default TotalAmount
