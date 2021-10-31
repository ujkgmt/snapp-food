import styles from "./footer.module.css"
import snappIcon from "./icon.svg"
const Footer = () => {
    return (
        <div className={`row ${styles.parent}`}>
            <div className="col-1"><img src={snappIcon} alt="" /></div>
            <div className="col">
                <h3>اسنپ فود</h3>
                <p>تجربه سفارش غذااز زود فود تا اسنپ فود</p>
            </div>
            <div className="col">
                <ul>
                    <li> <a href="">درباره اسنپ فود</a></li>
                    <li> <a href="">وبلاگ</a></li>
                    <li> <a href="">قوانین سایت</a></li>
                    <li> <a href="">حریم خصوصی</a></li>
                    <li> <a href="">ثبت نام فروشندگان</a></li>

                </ul>
            </div>
            <div className="col">
                <ul>
                    <li> <a href=""> تماس با اسنپ فود</a></li>
                    <li> <a href="">پرسش های متداول</a></li>
                    <li> <a href="">ثبت شکایت </a></li>
                    <li> <a href="">اپلیکیشن موبایل </a></li>


                </ul>
            </div>
            <div className="col d-flex">
                <img className={styles.images} src="https://w.snappfood.ir/static/images/enamad.png" alt="" />
                <img className={styles.images} src="https://w.snappfood.ir/static/images/senf.png" alt="" />
            </div>

        </div>
    );
}

export default Footer;