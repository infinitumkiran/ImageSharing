import {AppBar,Toolbar,Typography,IconButton,makeStyles} from '@mui/material';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
<AppBar position="absolute" style={{backgroundColor: "black",height: "9%"}}>
  <Toolbar variant="dense">
    <NavLink to ="./" style= { {color:"orange",
        textDecoration: 'none',
        display: "block",
        marginLeft: "auto",
        marginTop: "auto",
        marginRight: "auto",
        fontSize: 30,
        fontFamily:'sans-serif'
    }}>
      imgShare
    </NavLink>
    
  </Toolbar>
  
</AppBar>
    )
}

export default NavBar;