import React from "react";
import { Box, Button, Typography } from "@mui/material";
import style from "./banner.module.scss"
const Banner = ({button, title, subtitle}) => {
    return(
        <>
            <Box className={style.Background} style={{backgroundImage: `url('/assets/images/background_banner.png')`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                <Typography className={style.Title} variant="h2">{title}</Typography>
                <Typography className={style.SubTitle} variant="h6">{subtitle}</Typography>
                {button && <Button variant="contained" className={style.Button}> {button} </Button> }
            </Box>
        </>
    )
}

export default Banner