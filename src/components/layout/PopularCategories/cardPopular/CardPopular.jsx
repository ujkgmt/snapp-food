import { makeStyles } from '@mui/styles';


const CardPopular = ({title, imageUrl}) => {
    const useStyles = makeStyles({
        root: {
            backgroundImage: `url(${imageUrl})`,
            height: "10rem",
            width: "100%"
    
        },
    });
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                <h4>{title}</h4>
            </div>
            
        </>

    );
}

export default CardPopular;




