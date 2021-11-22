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

import { useHistory, Redirect } from 'react-router-dom'
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

function ItemList({ itemIndex }) {
  const val = useContext(createOrdersContext)
  console.log('in ItemList: val[0]: ', val[0])
  const [open, setOpen] = React.useState(true)
  const handleClick = () => {
    setOpen(!open)
  }
  const handleItemDelete = () => {
    val[1]({
      type: 'CREATE_ORDERS_DELETE_TARGET_ITEM_IN_ITEMS',
      payload: itemIndex,
    })
  }

  return (
    <>
      <ListItem
        key={`itemList_${itemIndex}`}
        secondaryAction={
          <IconButton edge="end" aria-label="delete" onClick={handleItemDelete}>
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemButton
          onClick={handleClick}
          sx={{ width: '100%' }}
          divider={true}
        >
          <ListItemText primary="OBJECT" />
          {open ? <RemoveIcon /> : <AddIcon />}
        </ListItemButton>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Item itemIndex={itemIndex} />
        </List>
      </Collapse>
    </>
  )
}

export default ItemList
