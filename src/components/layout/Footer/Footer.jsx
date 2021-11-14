import { Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import socialData from "../../../data/SocialNetworkLinks.json"
import SocialCard from './SocialCard';
const useStyles = makeStyles({
    SocialNetworkLinks: {
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center"
    },
    listItem: {
        listStyle: "none",
        marginBottom: ".7rem"
    },
    container: {
        backgroundColor: "rgb(39 48 54)",
        height: "14rem",
        marginTop: "2rem",
        paddingTop: "5rem"
    },
    listLink: {
        textDecoration: "none",
        color: "#fff"
    },
    permission: {
        backgroundColor: "#fff",
        borderRadius: ".8rem",
        margin: "2rem",
        padding: "1rem"
    }


});
const Footer = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <Grid container spacing={5}>
                <Grid xs={4}>
                    <Typography variant component="h2" color="coral" >فری فود</Typography>
                    <Typography variant component="h5" color="darkgray" >بهترین ها را با ما تجربه کنید</Typography>
                    <div className={classes.SocialNetworkLinks}>
                        {/* {socialData.map((item) => (
                            <SocialCard key={item.socialNetwork} link={item.link} svgIcon={item.svgIcon} />
                        ))} */}
                    </div>
                </Grid>
                <Grid xs={2} >
                    <ui>
                        <li className={classes.listItem}>
                            <a href="/" className={classes.listLink}>درباره ما</a>
                        </li>
                        <li className={classes.listItem}>
                            <a href="/" className={classes.listLink}>وبلاگ</a>
                        </li>
                        <li className={classes.listItem}>
                            <a href="/" className={classes.listLink}>قوانین سایت</a>
                        </li>
                        <li className={classes.listItem}>
                            <a href="/" className={classes.listLink}>حریم خصوصی</a>
                        </li>
                        <li className={classes.listItem}>
                            <a href="/" className={classes.listLink}>ثبت نام فروشندگان</a>
                        </li>
                    </ui>

                </Grid>
                <Grid xs={2}>
                    <ul>
                        <li className={classes.listItem}>
                            <a href="/" className={classes.listLink}>تماس با ما</a>
                        </li>
                        <li className={classes.listItem}>
                            <a href="/" className={classes.listLink}>پرسش های متداول</a>
                        </li>
                        <li className={classes.listItem}>
                            <a href="/" className={classes.listLink}>ثبت شکایت</a>
                        </li>
                        <li className={classes.listItem}>
                            <a href="/" className={classes.listLink}>اپلیکشین موبایل</a>
                        </li>
                    </ul>




                </Grid>
                <Grid xs={4}>
                    <img className={classes.permission} src="https://snappfood.ir/static/images/enamad.png" alt="" />
                    <img className={classes.permission} src="https://snappfood.ir/static/images/senf.png" alt="" />
                </Grid>


            </Grid>
        </Container>
    );
}

export default Footer;