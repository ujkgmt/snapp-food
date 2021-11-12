
import Header from '../../components/layout/Header/Header';

import { Typography } from '@mui/material';
import ListInfo from './../../components/layout/Header/listInfo/ListInfo';
import PopularCategories from '../../components/layout/PopularCategories/PopularCategories';
const HomePage = () => {
    return (
      <>
            <Header />
            <div style={{ textAlign: "center" , marginBottom: "3rem"}}>
            <Typography  variant="" component="h2">به راحتی آب خوردن
            </Typography>

            </div>
            <ListInfo />
            <PopularCategories/>
        </>

    );
}

export default HomePage;