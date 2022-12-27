import React from "react";
import style from "./carousel.module.scss"
import { Box, Typography } from "@mui/material";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { COLORS } from "../../constants/colors";

const SwiperItem = ({item}) => {
    return (
        <Box className={style.Item}>
            <img src={`${item?.image}`} alt="" />
            <Box className={style.lowerSection}>
                <Typography variant="h5">{item?.title}</Typography>
                <Typography variant="p">{item?.category}</Typography>
                <Typography variant="h6"> <span style={{color:COLORS.ORANGE_PRIMARY, fontWeight:"bolder"}}>{item?.price}</span> {item?.price - 10} </Typography>

            </Box>
        </Box>
    )
}

export default SwiperItem