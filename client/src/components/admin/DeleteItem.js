import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


// TODO remove, this demo shouldn't need to reset the theme.


export default function SignIn() {
    const handleSubmit = (event) => {
      
      event.preventDefault();
    
      const data = new FormData(event.currentTarget);    
    }
    
    // send a request to the backend for  
    // adding the prodct to the database

    const showProduct = () =>{
        fetch('http://localhost:5000/')
    }
    
    const deleteProduct = (product ) =>{
      fetch( 'http://localhost:5000/deleteitem',{
        method: 'DELETE',
        headers:{
          "Content-Type": "Application/json"
        },
        body:JSON.stringify( {product} )
      }).then( ( res ) =>{
        console.log( res )
      })
    }
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
              label="Product Title"
              name="productTitle"
              autoFocus
            />
            <Button
              variant = 'contained'
              fullWidth 
            >
              Show Item
            </Button>

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