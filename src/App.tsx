import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createTheme, Container, CssBaseline, ThemeProvider } from '@mui/material'
import Header from './components/Header/header'
import Home from './pages/Home/home'
import './App.scss'
import Page from './components/Page/page'
import { useQuery } from 'react-query'
import Video from './pages/Video/video'
import Search from './pages/Search/search'
import NotFound from './pages/404/notfound'

function App() {
  const { data: isDarkMode } = useQuery('darkMode')
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    }
  })

  return <Container className='app'>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route index element={<Page withSidebar><Home/></Page>} />
          <Route path='/video/:videoId' element={<Page><Video/></Page>} />
          <Route path='/search/:query' element={<Page withSidebar><Search/></Page>} />
          <Route path='*' element={<Page withSidebar><NotFound /></Page>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </Container>
}

export default App
