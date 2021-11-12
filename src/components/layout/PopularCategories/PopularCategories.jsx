import { Container, Grid, Typography } from '@mui/material';
import CardPopular from './cardPopular/CardPopular';
import pop from "../../../data/PopularCategories.json"
const PopularCategories = () => {
    return (
        <Container sx={{ mt: 15 }}>
            <Typography variant="" component="h2" >محبوب ترین دسته بندی ها</Typography>
            <Grid container spacing={2}>
                {pop.map((item) => (
                  <Grid key={item.title} item xs={2}>

                        <CardPopular imageUrl={item.imageurl} title={item.title}/>
                        {/* <img style={{width: "100%"}} src={item.imageurl} alt="" /> */}

                    </Grid>  
                )
                    
                    
                )}
            </Grid>

        </Container>
    );
}

export default PopularCategories;