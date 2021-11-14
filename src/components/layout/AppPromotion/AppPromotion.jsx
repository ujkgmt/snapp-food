import { Button, Grid, TextField, Typography } from "@mui/material";
import wave from "../../../assets/wave3.svg"
import { makeStyles } from '@mui/styles';
import AppLinks from "./AppLinks/AppLinks";

const useStyles = makeStyles({
    inputGroup: {
        display: "flex",
        marginTop: "5vh",
        marginRight: "10vw",
        marginLeft: "2rem"

    },
    numberInput: {
        width: "70%",
        fontSize: "2rem",

    },
    textInfo: {
        textAlign: "center",
        marginTop: "40vh",
        marginRight: "10vw",
        marginLeft: "2rem"
    }

});
const AppPromotion = () => {
    const classes = useStyles()
    return (
        <>
            <img src={wave} alt="" />
            <Grid container>
                <Grid xs={7} >
                    <header className={classes.textInfo}>
                        <Typography variant component="h2" >
                            اپلیکیشن موبایل ما
                        </Typography>
                        <Typography variant component="h5" color="GrayText">
                            برای دریافت لینک دانلود اپلیکیشن ما، شماره موبایلت رو وارد کن
                        </Typography>
                    </header>

                    <div className={classes.inputGroup}>
                        <TextField type="number" className={classes.numberInput} />
                        <Button variant="contained">دریافت لینک دانلود</Button>
                    </div>

                    <AppLinks />
                </Grid>
                <Grid xs={5}>
                    <img src="https://www.delino.com/img/home/fig-iphone.png" alt="" />
                </Grid>

            </Grid>
        </>
    );
}

export default AppPromotion;