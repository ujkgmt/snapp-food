import Button from "../../UI/Button/Button";
import storIcon from "./stor.svg"
import styles from "./VendorRegister.module.css"
const VendorRegister = () => {
    return ( 
        <div className="row">
            <div className="col-6">
            <h1>صاحب کسب و کار هستید؟</h1>
            <h6>با اسنپ فود کسب و کارتان را آنلاین کنید و فروشتان را افزایش دهید.</h6>
           <Button className="px-4 pb-0 d-flex ">
               <img className="me-3" src={storIcon} alt="" />
               <p className="fw-bold">ثبت نام فروشندگان </p>
           </Button>
            </div>
            <img className={`${styles.storImg} col-5`} src="https://w.snappfood.ir/static/images/vendor_pic.png" alt="" />
        </div>
     );
}
 
export default VendorRegister;

