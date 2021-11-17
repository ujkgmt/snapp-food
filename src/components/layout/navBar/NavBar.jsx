import logo from "./logo.jpg"
import LoginRegisterDialog from './../Login & register dialog/LoginRegisterDialog';


const NavBar = () => {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", marginRight:"10rem", marginLeft:"10rem"}}>

            <img src={logo} style={{ width: "5%", height: "5%", borderRadius: "1rem" }} alt="logo"/>
           <LoginRegisterDialog />



        </div>
    );
}

export default NavBar;