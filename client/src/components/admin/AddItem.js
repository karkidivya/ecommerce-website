import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';


// TODO remove, this demo shouldn't need to reset the theme.


export default function SignIn() {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const product = {
        title: data.get('productName'),
        price: Number(data.get( 'price')),
        isOld: true,
        oldPrice: Number(data.get('oldPrice')),
        category: data.get('productCategory'),
        image: data.get('image'),
        rating: 0
      }
      console.log( product )
      storeProduct( product )
    }
    

    const storeProduct = (product ) =>{
      fetch( 'http://localhost:5000/additem',{
        method: 'POST',
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
              label="Product Name"
              name="productName"
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
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="image"
              label="Image"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="description"
              label="Description"
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