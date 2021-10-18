import { FC } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import {
  createTheme, Box
} from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
})

const Main: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box sx={{ alignItems: 'center', display: 'flex', height: '100vh', justifyContent: 'center' }}>
      {children}
    </Box>
  </ThemeProvider>
)

export default Main
