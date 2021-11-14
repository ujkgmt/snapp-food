import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        backgroundColor: "#fff",
        borderRadius: ".5rem"
    }
});
const SocialCard = ({ link, svgIcon }) => {
    const classes = useStyles();
    // const icon = JSON.stringify(svgIcon);
    return (
        <a href={link} className={classes.root}>
            
        </a>
    );
}

export default SocialCard;