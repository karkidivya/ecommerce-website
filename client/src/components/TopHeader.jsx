import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import { LogoLight } from '../assets/index';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '100ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}));

export default function TopHeader() {
  const productData = useSelector((state)=> state.bazar.productData)
  const UserInfo = useSelector((state)=> state.bazar.userInfo)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{bgcolor:"#01092D"}}>
        <Toolbar variant='dense'  disableGutters sx={{minHeight:"50px",height: 50}}>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 0.3, display: { xs: 'none', sm: 'block' } }}
          >
            bazzar
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          
          <Link to='/cart'>
          <div className='cursor-pointer relative'>
          <ShoppingCartIcon/>
          <span className='abslute top-2 left-0'>{productData.length}</span>
          </div>
        </Link>
        <Link to={'/login'}>
          <img className='w-8 h-8 round-full' src={UserInfo ? UserInfo.image : 'data:image/jpeg;base64,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'} />    
        </Link>          
          { UserInfo && <p>{UserInfo.name}</p>}
         

        </Toolbar>
      </AppBar>
    </Box>
  );
}
