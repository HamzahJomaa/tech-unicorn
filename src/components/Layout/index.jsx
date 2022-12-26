import React from "react";
import { Grid, Box, Typography } from "@mui/material"
import style from "./layout.module.scss"
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

const Layout = () =>{
    return(
        <Grid container className={style.LayoutContainer}>
            <Grid item xs={6} className={style.LeftLayout}>
                <img src="/assets/images/logo.png" alt="" />
            </Grid>
            <Grid item xs={6} className={style.RightLayout}>
                <Box className={style.BoxContainer}>
                    <LocalPhoneOutlinedIcon fontSize="medium" />
                    <Typography variant="h6">Call Center</Typography>
                </Box>
                <Box className={style.BoxContainer}>
                    <LocalShippingOutlinedIcon fontSize="medium" />
                    <Typography variant="h6">Shipping Center</Typography>
                </Box>
            </Grid>
        </Grid>
    )
}


export default Layout