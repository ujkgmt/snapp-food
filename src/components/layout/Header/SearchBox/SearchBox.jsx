import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = () => {
    const useStyles = makeStyles({
        parent: {
            backgroundColor: "#fff",
            width: "50%",
            display: "flex",
            padding: ".8rem",
            borderRadius: "1rem",
            marginTop: "5rem",
            marginRight: "1rem"
        },
        selectBox: {
            width: "15%"
        },
        label: {
            textAlign: "center"
        },
        searchInput: {
            marginRight: ".4rem"
        },
        searchButton: {
            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
            padding: ".8rem",
            paddingBottom: "-0.2rem",
            borderRadius: ".2rem",
            height: "50%",
            marginRight: ".4rem"
        }

    });
    const classes = useStyles();
    return (
        <div className={classes.parent} >
            < FormControl className={classes.selectBox}>
                <InputLabel className={classes.label} id="demo-simple-select-label" >شهر</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value=""
                    label="Age"
                    onChange={(e) => { console.log(e.target.value) }}
                >
                    <MenuItem value={"tabriz"}>تبریز</MenuItem>
                    <MenuItem value={"tehran"}>تهران</MenuItem>
                    <MenuItem value={30}>ارومیه</MenuItem>
                    <MenuItem value={30}>مشهد</MenuItem>
                    <MenuItem value={30}>اصفهان</MenuItem>
                    <MenuItem value={30}>قزوین</MenuItem>
                    <MenuItem value={30}>بوشهر</MenuItem>
                </Select>
            </FormControl>

            <TextField fullWidth className={classes.searchInput} label="نام رستوران یا غذای مورد نظر" />
            <div className={classes.searchButton}>

                <SearchIcon sx={{ color: "#fff" }} />
            </div>
        </div >
    );
}

export default SearchBox;