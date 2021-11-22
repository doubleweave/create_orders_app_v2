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
  List,
  ListItem,
  ListSubheader,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  IconButton,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import DeleteIcon from '@mui/icons-material/Delete'
import { red } from '@mui/material/colors'

import { useHistory, Redirect } from 'react-router-dom'
import ItemList from './ItemList'
import Item from './Item'
import createOrdersReducer from '../createOrdersReducer'

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

function Items() {
  const val = useContext(createOrdersContext)
  console.log('in items: val[0]: ', val[0])
  console.log('in items: val[0].items[0]: ', val[0].items[0])

  const handleAddObject = () => {
    val[1]({
      type: 'CREATE_ORDERS_CREATE_NEW_OBJECT_IN_ITEMS',
      payload: '',
    })
  }

  const history = useHistory()
  const [errMsg, setErrMsg] = useState('')
  const toMerchantPage = () => {
    let isErr = false
    if (val[0].items.length === 0) {
      setErrMsg('Please create an Object in Items!!')
      isErr = true
      return
    }
    for (let i = 0; i < val[0].items.length; i++) {
      if (val[0].items[i].quantity === '') {
        setErrMsg('Quantity is required!!')
        isErr = true
        break
      } else if (val[0].items[i].price.amount === '') {
        setErrMsg('Price amount field is required!!')
        isErr = true
        break
      } else if (val[0].items[i].price.currency === '') {
        setErrMsg('Price currency field  is required!!')
        isErr = true
        break
      } else if (val[0].items[i].name === '') {
        setErrMsg('Name field is required!!')
        isErr = true
        break
      } else if (val[0].items[i].category === '') {
        setErrMsg('Category field is required!!')
        isErr = true
        break
      } else if (val[0].items[i].sku === '') {
        setErrMsg('Sku field is required!!')
        isErr = true
        break
      }
    }
    if (!isErr) {
      history.replace('/merchant')
    }
  }
  const toShippingPage = () => {
    history.replace('/shipping')
  }

  return (
    <>
      <Box sx={pageStyle}>
        <Card
          sx={{
            height: '95vh',
            overflowY: 'scroll',
          }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 14, ml: '2' }}
              color="text.secondary"
              gutterBottom
            >
              Items
            </Typography>
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
            <List
              sx={{
                width: '100%',
                bgcolor: 'background.paper',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              {val[0].items.map((itemData, index) => {
                return <ItemList key={`items_${index}`} itemIndex={index} />
              })}
            </List>
            <List
              sx={{
                width: '100%',
                bgcolor: 'background.paper',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItem>
                <ListItemButton
                  onClick={handleAddObject}
                  sx={{ width: '100%' }}
                  divider={true}
                >
                  <ListItemText primary="ADD OBJECT" />
                </ListItemButton>
              </ListItem>
            </List>
          </CardContent>
        </Card>

        <div>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#21b6ae',
            }}
            type="submit"
            onClick={() => {
              val[1]({
                type: 'SET_DEFAULT_VALUE_FOR_ITEMS_OBJECT',
                payload: '',
              })
            }}
            fullWidth
          >
            {/* quick button: filling form data, to test values do not influence each other between item objects */}
            One more object in items for testing
          </Button>
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

export default Items
