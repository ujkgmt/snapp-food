import { useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import {
    Grid, Typography, DialogContent, DialogTitle,
    Dialog, Button, IconButton, Container, TextField
} from '@mui/material';

import pizzaImg from "../../../assets/pizzaForLogin.jpg"
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(1),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(2),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

const LoginRegisterDialog = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div >
            <Button variant="contained" onClick={handleClickOpen}>
                ورود یا ثبت نام
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} > 
                   <Typography variant component="h4" ml={12}>فرم ورود یا ثبت نام</Typography>
                </BootstrapDialogTitle>
                <DialogContent onClose={handleClose}>
                    <Container >
                        <Grid container >
                            <Grid xs={7} >
                                <TextField sx={{mt: 2 ,ml: 5}} id="outlined-basic" label="ایمیل" variant="outlined" placeholder="ایمیل" type="email" dir="rtl"/>
                                <TextField sx={{mt: 2 ,ml: 5}} id="outlined-basic" label="رمز عبور" variant="outlined" placeholder="رمز عبور" type="password" dir="rtl"/>
                            <Button sx={{mt: 5 ,ml: 5, width: "14rem"}} variant="contained">ورود</Button>
                        
                            </Grid>
                            <Grid xs={4} ml={5}>
                            <img src={pizzaImg} alt="" style={{width: "100%", borderRadius: "1rem", marginBottom: "1.8rem"}}/>
                            </Grid>

                        </Grid>
                    </Container>
                </DialogContent>
            </BootstrapDialog>
        </div>
    );
}
export default LoginRegisterDialog;