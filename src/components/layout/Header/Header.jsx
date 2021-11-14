
import styles from "./Header.module.css"
import wave from "../../../assets/wave.svg"
import NavBar from "../navBar/NavBar";
import SearchBox from "./SearchBox/SearchBox";

const Header = () => {

    return (
        <div className={styles.Header}>
            <NavBar />
            <SearchBox />
            <img src={wave} style={{ marginTop: "11rem" }} alt="pizza" />
        </div>
    );
}

export default Header;