
import Header from '../../components/layout/Header/Header';

import { Typography } from '@mui/material';
import ListInfo from './../../components/layout/Header/listInfo/ListInfo';
import PopularCategories from '../../components/layout/PopularCategories/PopularCategories';
import AppPromotion from '../../components/layout/AppPromotion/AppPromotion';
import Footer from '../../components/layout/Footer/Footer';
const HomePage = () => {
    return (
        <>
            <Header />
            <div style={{ textAlign: "center", marginBottom: "3rem", marginRight: "40%" }}>
                <Typography variant="" component="h2" sx={{ borderBottom: " 2px solid #f04123", width: "30%", pb: 2 }}>به راحتی آب خوردن
                </Typography>

            </div>
            <ListInfo />
            <PopularCategories />
            <AppPromotion />
            <Footer />
        </>

    );
}

export default HomePage;