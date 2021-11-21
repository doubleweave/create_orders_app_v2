import { createContext, Context } from 'react'

// createContext: passing orders data stored in useReducer
const createOrdersContext = createContext(null)

export default createOrdersContext
