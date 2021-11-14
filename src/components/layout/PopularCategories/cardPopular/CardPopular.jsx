import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    parent: {
        "&:hover": {
            transform: `translateY("-2px")`
        }
    },
    image: {
        height: "8rem",
        width: "100%",
        position: "relative",
        opacity: "10",
        borderRadius: "1rem"
    },
    title: {
        position: "absolute",
        marginTop: -40,
        marginRight: 20,
        zIndex: "500",
        color: "#fff",
    
    }
});
const CardPopular = ({ title, imageUrl }) => {
    const classes = useStyles();
    return (
        <div className={classes.parent}>
            <img src={imageUrl} className={classes.image} alt="food" />
            <h4 className={classes.title}>{title}</h4>
        </div>

    );
}

export default CardPopular;




