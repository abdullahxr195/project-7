import { Box, List, ListItemButton } from "@mui/material";

export default function Sidebar(){
return(<>

<Box sx={{minHeight:"100vh", width:"250px",bgcolor:"red"}}>
    <List>
        <ListItemButton>Dashbaord</ListItemButton>
        <ListItemButton>Manage User</ListItemButton>
        <ListItemButton>Manage Products</ListItemButton>
        <ListItemButton>Manage Categories</ListItemButton>
        <ListItemButton>Manage Message</ListItemButton>
        <ListItemButton>Manage Profile</ListItemButton>
        <ListItemButton>Logout</ListItemButton>






    </List>



</Box>


</>)


}