import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{bgcolor:"#1C305C"}}>
        <Toolbar variant='dense' disableGutters sx={{minHeight:"30px",height: 30}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.1 }}><Link to={'/'}>
            Home
            </Link></Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.1 }}>
            Shop
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.1 }}>
            Blog
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.1 }}>
            Contact
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}