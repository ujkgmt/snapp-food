import { Button } from '@mui/material';
import logo from "./logo.jpg"


const NavBar = () => {
    return (
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>

            <img src={logo} style={{ width: "5%", height: "5%", borderRadius: "1rem" }} alt="logo"/>
            <Button variant="contained"  sx={{ mr: 50, background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)" , boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"}}> ورود یا عضویت</Button>




        </div>
    );
}

export default NavBar;