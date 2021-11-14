import { Container, Grid, Typography } from '@mui/material';
import CardPopular from './cardPopular/CardPopular';
import pop from "../../../data/PopularCategories.json";
import wave from "../../../assets/wave2.svg";
const PopularCategories = () => {
    return (
        <div >
        <img  src={wave} alt="" />
        <div style={{backgroundColor: "#273036"}}>
        <Container sx={{ mt: "-1rem"}}>
            <Typography variant="" component="h2" sx={{color:"#fff"}}>محبوب ترین دسته بندی ها</Typography>
            <Grid container spacing={2} mt={5} columns={10}>
                {pop.map((item) => (
                  <Grid key={item.title} item xs={2}>

                        <CardPopular imageUrl={item.imageurl} title={item.title}/>
                      

                    </Grid>  
                )
                    
                    
                )}
            </Grid>

        </Container>
        </div>
        </div>
    );
}

export default PopularCategories;