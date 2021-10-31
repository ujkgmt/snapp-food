import styles from "./TopNav.module.css"
import snapIcon from "./icon.svg"
import storIcon from "./stor.svg"
import locationIcon from "./location.svg"
import searchIcon from "./searchIcon.svg"
import arrowicon from "./arrowIcon.svg"
import Button from '../../UI/Button/Button';

const TopNav = () => {
    return (
        <div className={styles.nav_shadow}>
        <nav className="navbar navbar-expand-lg navbar-light " dir="rtl">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={snapIcon} alt="" />
                </a>
              
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="d-flex">
                        <img src={locationIcon} alt="" />
                        <div className="ms-3 mt-2">
                            <p className="mb-0 fw-bold" >آدرس انتخابی</p>
                            <div className="d-flex">

                                <p className={`${styles.location} text-muted`} >ولیعصر، بلوار شریعتى، پروین اعتصامى  </p>
                                <img src={arrowicon} alt="" className="mb-2" />
                            </div></div></div>

                    <div className={` d-flex   ${styles.search_box} `}>
                        <img src={searchIcon} alt="" className="mb-3 me-3" />
                        <p >جستوجو در اسنپ فود</p>
                    </div>
                    <div className={`d-flex  ${styles.stor}`}>
                        <img src={storIcon} alt="" className="me-2 mb-2" />
                        <p className="mt-2">ثبت نام فروشندگان</p>
                    </div>
                   <Button> <span className="fw-bold">ورود</span> یا <span className="fw-bold">عضویت </span></Button>
                </div>
            </div>
        
        </nav>
         
</div>
    );
}

export default TopNav;