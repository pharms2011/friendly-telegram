import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Container } from '@mui/system';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import Header from './Header';
import './styles.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const palletType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: palletType,
      background: {
        default: palletType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header toggleDarkMode={toggleDarkMode} isDark={darkMode} />
      <Container>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Container>

    </ThemeProvider>
  );
}

export default App;
