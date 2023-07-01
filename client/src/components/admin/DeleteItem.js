import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

// TODO remove, this demo shouldn't need to reset the theme.


export default function SignIn() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

    //     set search query to empty string
    const [q, setQ] = useState("");
    //     set search parameters
    //     we only what to search countries by capital and name
    //     this list can be longer if you want
    //     you can search countries even by their population
    // just add it to this array
    const [searchParam] = useState(["title", "description"]);

    // Note: the empty deps array [] means
  useEffect(() => {
    fetch("http://localhost:5000/products")
        .then((res) => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result);
                console.log(result)
            },

            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        );

             
      }, []);
    const handleSubmit = (event) => {
      
      event.preventDefault();
    
      const data = new FormData(event.currentTarget);    
    }
    
    // send a request to the backend for  
    // adding the prodct to the database

    // const showProduct = () =>{
    //     fetch('http://localhost:5000/')
    // }
    
    // const deleteProduct = (product ) =>{
    //   fetch( 'http://localhost:5000/deleteitem',{
    //     method: 'DELETE',
    //     headers:{
    //       "Content-Type": "Application/json"
    //     },
    //     body:JSON.stringify( {product} )
    //   }).then( ( res ) =>{
    //     console.log( res )
    //   })
    // }

    const data = Object.values(items);
    console.log(data);
    function search(items) {       //returns true if the requuired item in found in the object
      return items.filter((item) => {
          return searchParam.some((newItem) => {
              return (
                  item[newItem]
                      .toString()
                      .toLowerCase()
                      .indexOf(q.toLowerCase()) > -1
              );
          });
      });
  }


  if (error) {
    return (
        <p>
             if you get this error, we havent got the products.
            
        </p>
    );
} else if (!isLoaded) {
    return <>loading...</>;
} else {
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
            <TextField onChange={(e) => setQ(e.target.value)}
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
          {search(data).map((item) => (
            <div>{item.title}</div>))}
        </Box>
      
  );
}}