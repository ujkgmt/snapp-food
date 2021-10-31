
import styles from "./GroupCard.module.css"
const GroupCard = ({ title, imageUrl}) => {
  
    return (
        <div   className={`${styles.parent} col-2 mb-4`}>
            <img src={imageUrl} alt="" className={styles.image_styles} />
            <div  className={`${styles.title_image} d-flex justify-content-between`}>
                <div className={`${styles.arrow} me-2`}>

                    <svg  className={styles.arrow} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ff00a6" className="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                    </svg>
                </div>
                <p className={`${styles.p_item} `}>
                    {title}</p>
            </div>
        </div>
    );
}

export default GroupCard;