import { useState }  from 'react'
import {useNavigate} from 'react-router-dom'
import { ListItemButton,List, Button, Box, Typography, ListItemText  } from "@mui/material"


const AdminNav = ()=>{

    const navigate = useNavigate();

    const [ selectedIndex, setSelectedIndex ] = useState( 0 )
    const handleClick = ( action, index) =>{
        setSelectedIndex( index )
        action()
    }
    
    const addItems = ()  =>{
        navigate('/admin/dashboard/additem')
    }

    const deleteItem = () =>{
        navigate('/admin/dashboard/deleteitem')
    }
    const toDashboard = () =>{
        navigate( '/admin/dashboard')
    }
    const clickAction = () =>{
        console.log('Click action has been called')
    }

    return<>
        <Box sx = {{borderRight: '1px solid grey', width: '300px', height: '100vh'}}> 
        <List sx = { {p: 0}}>
            <ListItemButton 
                selected = { selectedIndex === 0 }
                onClick = { () =>{ handleClick( toDashboard, 0)}}
            >
                <ListItemText sx = {{ textAlign : 'center'}} primary = 'Overview' />
            </ListItemButton>

            <ListItemButton
                selected = { selectedIndex === 1 }
                onClick = { () =>{ handleClick( addItems, 1)}}
            >
                <ListItemText sx = {{ textAlign : 'center'}} primary = 'Add Item' />
            </ListItemButton>
            <ListItemButton
                selected = { selectedIndex === 2}
                onClick = { () =>{ handleClick( deleteItem, 2)}}               
            >
                <ListItemText  sx = {{ textAlign : 'center'}} primary = 'Delete Item' />
            </ListItemButton>
            <ListItemButton
                selected = { selectedIndex === 3}
                onClick = { () =>{ handleClick( clickAction, 3)}}               
            >
                <ListItemText  sx = {{ textAlign : 'center'}} primary = 'Option no. 4' />
            </ListItemButton>
            <ListItemButton
                selected = { selectedIndex === 4 }
                onClick = { () =>{ handleClick( clickAction, 4)}}            
            >
                <ListItemText  sx = {{ textAlign : 'center'}} primary = 'Option no. 5' />
            </ListItemButton>
        </List>
        </Box>
    </>
}

export default AdminNav