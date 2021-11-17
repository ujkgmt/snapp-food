
import styles from "./Header.module.css"
import wave from "../../../assets/wave.svg"
import NavBar from "../navBar/NavBar";
import SearchBox from "./SearchBox/SearchBox";
import FoodTextTransition from "../../UI/TextTransition";
import { Typography } from "@mui/material";

const Header = () => {

    return (
        <div className={styles.Header}>
            <NavBar />
            <SearchBox />
            <div style={{display: "flex", marginTop: "4rem" , marginRight: "3rem" , fontSize: "22px"}}>
           <Typography variant component="h1" color="white" ml={2} > سفارش آنلاین</Typography> 
           <FoodTextTransition />
            </div>
            <img src={wave} style={{ marginTop: "4rem" }} alt="pizza" />
        </div>
    );
}

export default Header;