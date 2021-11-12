
import styles from "./Header.module.css"
import wave from "../../../assets/wave.svg"
import NavBar from "../navBar/NavBar";

const Header = () => {

    return (
        <div className={styles.Header}>
            <NavBar />
            <img src={wave} style={{ marginTop: "22rem" }} alt="pizza" />
        </div>
    );
}

export default Header;