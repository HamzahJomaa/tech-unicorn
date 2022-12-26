import React from "react";
import { Box, Link } from "@mui/material";
import style from "./productstopfilter.module.scss"
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

const Item = ({item}) => {
    return(
        <Box className={style.item} >
            <img src={`${item?.image}`} alt="" />
            <Box className={style.lowerSection}>
                <h4>{item?.title}</h4>
                <Link className={style.IconButton} href={`/product/${item?.id}`}> <ArrowForwardOutlinedIcon color="action" fontSize="large" />  </Link>
            </Box>
        </Box>
    )
}


export default Item