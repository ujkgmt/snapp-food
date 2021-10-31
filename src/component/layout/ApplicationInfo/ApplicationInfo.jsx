import Button from "../../UI/Button/Button";
import styles from "./ApplicationInfo.module.css"
const ApplicationInfo = () => {
   return (
      <div className={`row ${styles.app}`} >
         <div className={`${styles.info} col-6 mx-5 `}>
            <h1 className="fw-bold">اپلیکیشن اسنپ فود</h1>
            <p className="text-muted">با اپلیکیشن اسنپ‌فود به راحتی و با چند کلیک ساده می‌توانید رستوران‌ها، کافه‌ها، شیرینی‌فروشی‌ها و سوپرمارکت‌های نزدیک خودتان را جست‌و‌جو کرده و از تجربه سفارش آسان از اسنپ‌فود لذت ببرید.</p>
            <div className={styles.parent}>
               <div className={`${styles.number_input}`}>
                  <input type="number" id="" placeholder="۰۹*********"/>
                  <Button className="h-25">دریافت لینک</Button>
               </div>
                 
            </div>
         </div>
         <img className="col-5 " src="https://w.snappfood.ir/static/images/img_app_mockup@2x.png" alt="" />
      </div>
   );
}

export default ApplicationInfo;