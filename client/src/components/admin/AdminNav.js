import { ListItemButton,List, Button, Box, Typography, ListItemText  } from "@mui/material"

const NavBarItem = ({ handleClick, buttonLabel }) =>{
    const onClick = () =>{
        console.log( 'A button has been clicked')
        handleClick()
    }
    return<>
        <Button 
            onClick = {handleClick }
            color = 'neutral'
            variant = 'solid'
            sz = 'lg'
            items = 'center'
            sx = {{flexGrow: 1}}
        >
            { buttonLabel }
        </Button>
    </>
}

const AdminNav = ()=>{
    const handleClick = () =>{
        console.log( 'From the top function ')
    }
    
    return<>
        <Box sx = {{borderRight: '1px solid grey', width: '300px'}}> 
        <List>
            <ListItemButton>
                <ListItemText sx = {{ textAlign : 'center'}} primary = 'Overview' />
            </ListItemButton>
            <ListItemButton>
                <ListItemText sx = {{ textAlign : 'center'}} primary = 'Add Item' />
            </ListItemButton>
            <ListItemButton>
                <ListItemText  sx = {{ textAlign : 'center'}} primary = 'Delete Item' />
            </ListItemButton>
            <ListItemButton>
                <ListItemText  sx = {{ textAlign : 'center'}} primary = 'Option no. 4' />
            </ListItemButton>
            <ListItemButton>
                <ListItemText  sx = {{ textAlign : 'center'}} primary = 'Option no. 5' />
            </ListItemButton>

        </List>
        </Box>
    </>
}

export default AdminNav