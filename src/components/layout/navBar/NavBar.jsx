import { Button } from '@mui/material';
import logo from "./logo.jpg"


const NavBar = () => {
    return (
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>

            <img src={logo} style={{ width: "5%", height: "5%", borderRadius: "1rem" }} alt="logo"/>
            <Button sx={{ zIndex: 100, mr: 50, backgroundColor: "#fff" }}> ورود یا عضویت</Button>




        </div>
    );
}

export default NavBar;