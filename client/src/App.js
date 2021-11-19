import React from 'react'
// import './App.css'
// import DirectCommunicate from './components/DirectCommunicate';
// import Form from './components/createOrders/Form'
import CreateOrders from './components/createOrders'

import {
  ThemeProvider,
  Theme,
  StyledEngineProvider,
  createTheme,
} from '@mui/material/styles'

// declare module '@mui/styles/defaultTheme' {
//   // eslint-disable-next-line @typescript-eslint/no-empty-interface
//   interface DefaultTheme extends Theme { }
// }

const theme = createTheme()

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CreateOrders />
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App
