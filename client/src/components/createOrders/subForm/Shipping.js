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

function Shipping() {
  const val = useContext(createOrdersContext)
  console.log('val[0]: ', val[0])

  const history = useHistory()
  const [errMsg, setErrMsg] = useState('')
  const toItemsPage = () => {
    if (val[0].shipping.countryCode === '') {
      setErrMsg('CountryCode is required!!')
    } else if (val[0].shipping.name === '') {
      setErrMsg('Name field is required!!')
    } else if (val[0].shipping.postCode === '') {
      setErrMsg('PostCode field is required!!')
    } else if (val[0].shipping.line1 === '') {
      setErrMsg('Line1 field is required!!')
    } else {
      history.replace('/items')
    }
  }
  const toBillingPage = () => {
    history.replace('/billing')
  }

  return (
    <>
      <Box className="form" sx={pageStyle}>
        <div>
          <form>
            <FormLabel sx={formTopLabel} component="legend">
              Shipping
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
                    value={val[0].shipping.phoneNumber}
                    onChange={(e, values) => {
                      val[1]({
                        type: 'CREATE_ORDERS_UPDATE_SHIPPING_PHONENUMBER',
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
                            type: 'CREATE_ORDERS_UPDATE_SHIPPING_PHONENUMBER',
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
                    value={val[0].shipping.countryCode}
                    onChange={(e, values) => {
                      val[1]({
                        type: 'CREATE_ORDERS_UPDATE_SHIPPING_COUNTRYCODE',
                        payload: values,
                      })
                    }}
                    options={['IT']}
                    renderInput={(params) => (
                      <TextField
                        required={true}
                        {...params}
                        label="countryCode"
                        InputProps={{
                          ...params.InputProps,
                          type: 'text',
                        }}
                        onChange={(e) => {
                          val[1]({
                            type: 'CREATE_ORDERS_UPDATE_SHIPPING_COUNTRYCODES',
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
                    value={val[0].shipping.name}
                    onChange={(e, values) => {
                      val[1]({
                        type: 'CREATE_ORDERS_UPDATE_SHIPPING_NAME',
                        payload: values,
                      })
                    }}
                    options={['Joe Consumer']}
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
                            type: 'CREATE_ORDERS_UPDATE_SHIPPING_NAME',
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
                    value={val[0].shipping.postcode}
                    onChange={(e, values) => {
                      val[1]({
                        type: 'CREATE_ORDERS_UPDATE_SHIPPING_POSTCODE',
                        payload: values,
                      })
                    }}
                    options={['50056']}
                    renderInput={(params) => (
                      <TextField
                        required={true}
                        {...params}
                        label="postcode"
                        InputProps={{
                          ...params.InputProps,
                          type: 'text',
                        }}
                        onChange={(e) => {
                          val[1]({
                            type: 'CREATE_ORDERS_UPDATE_SHIPPING_POSTCODE',
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
                    value={val[0].shipping.suburb}
                    onChange={(e, values) => {
                      val[1]({
                        type: 'CREATE_ORDERS_UPDATE_SHIPPING_SUBURB',
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
                            type: 'CREATE_ORDERS_UPDATE_SHIPPING_SUBURB',
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
                    value={val[0].shipping.line1}
                    onChange={(e, values) => {
                      val[1]({
                        type: 'CREATE_ORDERS_UPDATE_SHIPPING_LINE1',
                        payload: values,
                      })
                    }}
                    options={['Via della Rosa, 58']}
                    renderInput={(params) => (
                      <TextField
                        required={true}
                        {...params}
                        label="line1"
                        InputProps={{
                          ...params.InputProps,
                          type: 'text',
                        }}
                        onChange={(e) => {
                          val[1]({
                            type: 'CREATE_ORDERS_UPDATE_SHIPPING_LINE1',
                            payload: e.target.value,
                          })
                        }}
                      />
                    )}
                  />
                </Stack>

                {/* <Grid item alignItems="flex-start" sx={gridItemText}>
                  <TextField
                    id="phoneNumber"
                    label="phoneNumber:"
                    type="text"
                    placeholder="0400000000"
                    value={val[0].shipping.phoneNumber}
                    onChange={(e) => {
                      val[1]({
                        type: 'CREATE_ORDERS_UPDATE_SHIPPING_PHONENUMBER',
                        payload: e.target.value,
                      })
                    }}
                  />
                </Grid>
                <Divider />
                <Grid item alignItems="flex-start" sx={gridItemText}>
                  <TextField
                    required
                    id="countryCode"
                    label="countryCode"
                    type="text"
                    placeholder="IT"
                    value={val[0].shipping.countryCode}
                    onChange={(e) => {
                      val[1]({
                        type: 'CREATE_ORDERS_UPDATE_SHIPPING_COUNTRYCODE',
                        payload: e.target.value,
                      })
                    }}
                  />
                </Grid>
                <Divider />
                <Grid item alignItems="flex-start" sx={gridItemText}>
                  <TextField
                    required
                    id="name"
                    label="name"
                    type="text"
                    placeholder="Joe Consumer"
                    value={val[0].shipping.name}
                    onChange={(e) => {
                      val[1]({
                        type: 'CREATE_ORDERS_UPDATE_SHIPPING_NAME',
                        payload: e.target.value,
                      })
                    }}
                  />
                </Grid>
                <Divider />
                <Grid item alignItems="flex-start" sx={gridItemText}>
                  <TextField
                    required
                    id="postcode"
                    label="postcode"
                    type="text"
                    placeholder="50056"
                    value={val[0].shipping.postcode}
                    onChange={(e) => {
                      val[1]({
                        type: 'CREATE_ORDERS_UPDATE_SHIPPING_POSTCODE',
                        payload: e.target.value,
                      })
                    }}
                  />
                </Grid>
                <Divider />
                <Grid item alignItems="flex-start" sx={gridItemText}>
                  <TextField
                    id="suburb"
                    label="suburb"
                    type="text"
                    placeholder="Montelupo Fiorentino"
                    value={val[0].shipping.suburb}
                    onChange={(e) => {
                      val[1]({
                        type: 'CREATE_ORDERS_UPDATE_SHIPPING_SUBURB',
                        payload: e.target.value,
                      })
                    }}
                  />
                </Grid>
                <Divider />
                <Grid item alignItems="flex-start" sx={gridItemText}>
                  <TextField
                    required
                    id="line1"
                    label="line1"
                    type="text"
                    placeholder="Via della Rosa, 58"
                    value={val[0].shipping.line1}
                    onChange={(e) => {
                      val[1]({
                        type: 'CREATE_ORDERS_UPDATE_SHIPPING_LINE1',
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
            onClick={toBillingPage}
            fullWidth
          >
            Previous
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            onClick={toItemsPage}
          >
            {/* {page === FormTitle.length - 1 ? 'Submit' : 'Next'}{' '} */}
            Next
          </Button>
        </div>
      </Box>
    </>
  )

  // return (
  //   <>
  //     <Grid container alignItems="center" justify="center" direction="column">
  //       <Grid item alignItems="flex-start" sx={gridItemText}>
  //         <TextField
  //           id="phoneNumber"
  //           label="phoneNumber:"
  //           type="text"
  //           placeholder="0400000000"
  //           value={val[0].shipping.phoneNumber}
  //           onChange={(e) => {
  //             const data = { ...val[0] }
  //             data.shipping.phoneNumber = e.target.value
  //             setval[0](data)
  //           }}
  //         />
  //       </Grid>
  //       <Divider />
  //       <Grid item alignItems="flex-start" sx={gridItemText}>
  //         <TextField
  //           required={true}
  //           id="countryCode"
  //           label="countryCode"
  //           type="text"
  //           placeholder="IT"
  //           value={val[0].shipping.countryCode}
  //           onChange={(e) => {
  //             const data = { ...val[0] }
  //             data.shipping.countryCode = e.target.value
  //             setval[0](data)
  //           }}
  //         />
  //       </Grid>
  //       <Divider />
  //       <Grid item alignItems="flex-start" sx={gridItemText}>
  //         <TextField
  //           required={true}
  //           id="name"
  //           label="name"
  //           type="text"
  //           placeholder="Joe Consumer"
  //           value={val[0].shipping.name}
  //           onChange={(e) => {
  //             const data = { ...val[0] }
  //             data.shipping.name = e.target.value
  //             setval[0](data)
  //           }}
  //         />
  //       </Grid>
  //       <Divider />
  //       <Grid item alignItems="flex-start" sx={gridItemText}>
  //         <TextField
  //           required={true}
  //           id="postcode"
  //           label="postcode"
  //           type="text"
  //           placeholder="50056"
  //           value={val[0].shipping.postcode}
  //           onChange={(e) => {
  //             const data = { ...val[0] }
  //             data.shipping.postcode = e.target.value
  //             setval[0](data)
  //           }}
  //         />
  //       </Grid>
  //       <Divider />
  //       <Grid item alignItems="flex-start" sx={gridItemText}>
  //         <TextField
  //           id="suburb"
  //           label="suburb"
  //           type="text"
  //           placeholder="Montelupo Fiorentino"
  //           value={val[0].shipping.suburb}
  //           onChange={(e) => {
  //             const data = { ...val[0] }
  //             data.shipping.suburb = e.target.value
  //             setval[0](data)
  //           }}
  //         />
  //       </Grid>
  //       <Divider />
  //       <Grid item alignItems="flex-start" sx={gridItemText}>
  //         <TextField
  //           required={true}
  //           id="line1"
  //           label="line1"
  //           type="text"
  //           placeholder="Via della Rosa, 58"
  //           value={val[0].shipping.line1}
  //           onChange={(e) => {
  //             const data = { ...val[0] }
  //             data.shipping.line1 = e.target.value
  //             setval[0](data)
  //           }}
  //         />
  //       </Grid>
  //     </Grid>
  //   </>
  // )
}

export default Shipping
