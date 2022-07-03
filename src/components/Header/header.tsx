import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Box, OutlinedInput, InputAdornment, Toolbar } from '@mui/material'
import './header.scss';
import { Apps, DarkMode, LightMode, Menu, Search, VideoCall, YouTube } from '@mui/icons-material'
import { useQueryClient, useQuery } from 'react-query';


function Header() {
  const navigate = useNavigate();
  const [inputSearch, setInputSearch] = useState('');
  const client = useQueryClient();
  const { data: isDarkMode } = useQuery('darkMode');

  // Use react query to toggle sidebarOpen
  function toggleSidebar() {
    client.setQueryData('sidebarOpen', !client.getQueryData('sidebarOpen'));
  }
  function toggleTheme() {
    client.setQueryData('darkMode', !client.getQueryData('darkMode'));
  }
  function handleSearch() {
    if (inputSearch === '') {
      navigate('/');
      return
    }
    navigate(`/search/${inputSearch}`);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color='default'>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <div className="header__left">
            <Menu onClick={toggleSidebar} />
            <Link to='/' className='header__logo'>
              <YouTube />
            </Link>
          </div>

          <div className="header__center">
            <OutlinedInput
              size='small'
              type='text'
              placeholder='Search'
              onChange={(e) => setInputSearch(e.target.value)} value={inputSearch}
              endAdornment={
                <InputAdornment position='end'>
                  <Search className='header__searchbutton' onClick={handleSearch}/>
                </InputAdornment>
              }
            />
          </div>

          <div className="header__right">
            <VideoCall className='header__icon' />
            <Apps className='header__icon' />
            {
              isDarkMode ? <LightMode onClick={toggleTheme} /> : <DarkMode onClick={toggleTheme} />
            }
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header;
