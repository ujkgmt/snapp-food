import Header from "./component/layout/header/Header";

import TopNav from "./component/layout/TopNav/TopNav"
import Grouping from './component/layout/Grouping/Grouping.jsx';
import ApplicationInfo from "./component/layout/ApplicationInfo/ApplicationInfo";
import VendorRegister from "./component/layout/VendorRegister/VendorRegister";
import CityList from "./component/layout/CityList/CityList";
import Footer from "./component/layout/footer/Footer";



const App = () => {


    return ( 
      <div dir="rtl">
       <TopNav/>
       <Header/>
       <Grouping/>
       <ApplicationInfo/>
       <VendorRegister/>
       <CityList/>
       <Footer />
      </div>
       
     );
}
 
export default App;