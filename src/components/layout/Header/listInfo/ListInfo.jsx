
import { Grid, Typography } from "@mui/material";
import fast from "./fast-delivery.png"
import food from "./food-delivery.png"
import order from "./order.png"
const ListInfo = () => {
    return (
        <Grid container spacing={2}  sx={{textAlign: "center"}}>
            <Grid item xs={4}>
                <img style={{ width: "25%" }} src={fast} alt="" /> <br />
                <Typography variant="">در سریع ترین زمان ممکن</Typography>
            </Grid>
            <Grid item xs={4}>
                <img style={{ width: "21%" }} src={food} alt="" /> <br />
                <Typography variant="">با کیفیت ترین و بهترین غذا</Typography>

            </Grid>
            <Grid item xs={4}>
                <img style={{ width: "21%" }} src={order} alt="" /> <br />
                <Typography variant=""> دارای اپلیکیشن کارآمد</Typography>

            </Grid>
        </Grid>
    );
}

export default ListInfo;

