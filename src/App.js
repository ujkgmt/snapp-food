// import Orders from "./pages/Orders/Orders";
import { theme } from "./components/Theme/Theme";
import { ThemeProvider } from "@mui/system";
import HomePage from './pages/Home/HomePage';


const App = () => {
    return (
        <div dir="rtl">

        <ThemeProvider theme={theme} >
            <HomePage />
        </ThemeProvider>
        </div>


    );
}

export default App;