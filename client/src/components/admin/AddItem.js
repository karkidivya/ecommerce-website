import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';


// TODO remove, this demo shouldn't need to reset the theme.


export default function SignIn() {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email= data.get('email')
    const  password= data.get('password')

    if ( email == 'admin' && password == 'admin' ){
        navigate( '/admin/dashboard')
    }

    
  };

  return (
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 8,
            width: '100%'
          }}
        >

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Product Name"
              name="productName'"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="productCategory"
              label="Product Category"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="price"
              label="price"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="oldPrice"
              label="Old Price"
              id="password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Image"
              label="Image"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="description"
              label="Description"
              id="password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="productCategory"
              label="Product Category"
              id="password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="productCategory"
              label="Product Category"
              id="password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add
            </Button>
          </Box>
        </Box>
      
  );
}