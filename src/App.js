import React from 'react'
import Home from './components/Home/Home';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>

    
  )
}

export default App