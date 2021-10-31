import styles from "./Header.module.css"

const Header = () => {
    return ( 
        <>
           <div className="d-flex justify-content-center align-align-content-center-center mt-3 mb-3">
            <div className="col-1  " style={{marginLeft: "5rem"}}>
                <img className={`${styles.list_image} `} src="https://static.snapp-food.com/uploads/images/review-app/icons/count/desktop_9_603b811b1d540_img_st_other2.png" alt="" />
                <span className={`${styles.list_span} `}>سایر</span>
            </div>
            <div className=" col-1 me-3 me-2">
                <img className={`${styles.list_image}`} src="https://static.snapp-food.com/uploads/images/review-app/icons/count/desktop_7_60350883d6e43_img_st_nut.png" alt="" />
                <span className={`${styles.list_span} `}>آجیل</span>
            </div>
            <div className=" col-1 me-2">
                <img className={`${styles.list_image} me-3 `} src="https://static.snapp-food.com/uploads/images/review-app/icons/count/desktop_8_6035087b463a3_img_st_icecream.png" alt="" />
                <span className={`${styles.list_span}  `}>آب میوه بستنی</span>
            </div>
            <div className=" col-1 me-3">
                <img className={`${styles.list_image}`} src="https://static.snapp-food.com/uploads/images/review-app/icons/count/desktop_11_603507afc9a32_img_st_meat.png" alt="" />
                <span className={`${styles.list_span} `}>پروتئین</span>
            </div>
            <div className=" col-1 me-3">
                <img className={`${styles.list_image}`} src="https://static.snapp-food.com/uploads/images/review-app/icons/count/desktop_6_6035088cbcde4_img_st_fruit.png" alt="" />
                <span className={`${styles.list_span} `}>میوه</span>
            </div>
            <div className=" col-1 me-3">
                <img className={`${styles.list_image}`} src="https://static.snapp-food.com/uploads/images/review-app/icons/count/desktop_5_60350898c61b5_img_st_bakery.png" alt="" />
                <span className={`${styles.list_span} `}>نانوایی</span>
            </div>
            <div className=" col-1 me-3">
                <img className={`${styles.list_image}`} src="https://static.snapp-food.com/uploads/images/review-app/icons/count/desktop_3_603508a95b9be_img_st_sweet.png" alt="" />
                <span className={`${styles.list_span} `}>شیرینی</span>
            </div>
            <div className=" col-1 me-3">
                <img className={`${styles.list_image}`} src="https://static.snapp-food.com/uploads/images/review-app/icons/count/desktop_2_603508b330711_img_st_cafe.png" alt="" />
                <span className={`${styles.list_span} `}>کافه</span>
            </div>
            <div className=" col-1 me-3 ">
                <img className={`${styles.list_image}`} src="https://static.snapp-food.com/uploads/images/review-app/icons/count/desktop_4_603508a14ab73_img_st_supermarket.png" alt="" />
                <span className={`${styles.list_span}  me-0`}>سوپر مارکت</span>
            </div>
            <div className=" col-1 me-3">
                <img className={`${styles.list_image}`} src="https://static.snapp-food.com/uploads/images/review-app/icons/count/desktop_1_603508bf202d8_img_st_food.png" alt="" />
                <span className={`${styles.list_span} `}>رستوران</span>
            </div>
           
            
        </div>
        </>
     );
}
 
export default Header;