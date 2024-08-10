import React, {useState} from 'react'
import { AppBar, Box, Drawer, IconButton, toggleButtonClasses, Toolbar, Typography } from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import "../../styles/Headerstyles.css";


const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
//menu handle
const handleDrawerToggle = () => {
  setMobileOpen(!mobileOpen)
}
  //menu drawer
  const drawer= (
    <Box onClick= {handleDrawerToggle} 
    sx={{textAlign: 'center'}}>
      <Typography color={"orange"}
         varient="h6" 
         component="div"
          sx={{flexGrow: 1, my: 2}}
          >
        <RestaurantIcon/>
          My Resturant
          </Typography>
            <ul className='mobile-navigation'>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/menu"}>Menu</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
              
            </ul>
          

    </Box>
  )
  return (
    <>
    <Box>
    <AppBar component={"nav"} sx={{ bgcolor: "black"}}>
      <Toolbar>
        <IconButton color='inherit' aria-label='open drawer' edge='start' sx={{mr: 2, display: {sm: 'none'}}}
         onClick={handleDrawerToggle}
        >
        
           <MenuIcon/>
        </IconButton>
        <Typography color={"orange"}
         varient="h6" 
         component="div"
          sx={{flexGrow: 1}}
          >
        <RestaurantIcon/>
          Marhaba Resturant
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <ul className='navigation-menu'>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/menu"}>Menu</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
              
            </ul>
          </Box>
        
        </Toolbar>
       </AppBar>
       <Box component='nav'>
<Drawer variant="temporary" open={mobileOpen}
 onClose={handleDrawerToggle}
 sx={{display: {xs:'block', sm: 'none'},
"& .MuiDrawer-paper":{
  boxSizing: "borderbox",
  width: '240px'
}
}}
 >

  {drawer}
</Drawer>
       </Box>
       <Box >
        <Toolbar/>
       </Box>
       
    </Box>
    </>
  )
}

export default Header