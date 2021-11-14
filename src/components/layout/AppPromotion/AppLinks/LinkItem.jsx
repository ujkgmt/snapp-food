import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        backgroundColor: "rgb(39 48 54)",
        borderRadius: ".4rem",
        margin: ".3rem"
    },
    imageItem: {
        width: "90%"
    }

});

const LinkItem = ({ imageUrl }) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <img src={imageUrl} className={classes.imageItem} alt="" />
        </div>
    );
}

export default LinkItem;