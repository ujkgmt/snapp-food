import { Container, Grid } from "@mui/material";
import links from "../../../../data/appLinks.json"
// import { makeStyles } from '@mui/styles';
import LinkItem from "./LinkItem";

// const useStyles = makeStyles({


// });
const AppLinks = () => {
    // const classes = useStyles()
    return (
        <Container>
          <Grid container mt={5} spacing={2}>
            {links.map((link) => (
                <Grid xs={3}>
                    <LinkItem imageUrl={link.imageUrl} />
                </Grid>
            )

            )}

        </Grid>  
        </Container>
        
    );
}

export default AppLinks;