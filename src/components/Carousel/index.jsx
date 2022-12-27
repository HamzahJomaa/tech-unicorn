import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";

import SwiperItem from "./swiperitem";
import { Typography, Box } from "@mui/material";
import style from "./carousel.module.scss"
import { Pagination } from "swiper";

const Carousel = ({title, subtitle, items}) => {
    return(
        <>
        
        <Box className={style.Description}>
            <Typography className={style.title} variant="h4"> {title} </Typography>
            <Typography className={style.subtitle} variant="p">{subtitle}</Typography>
        </Box>
        
        <Swiper
            id="carousel-homepage"
            spaceBetween={50}
            slidesPerView={4}
            pagination={true} 
            modules={[Pagination]}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            {items && items.map(item => (<SwiperSlide><SwiperItem item={item}/></SwiperSlide>))}
        </Swiper>
        
        </>
    )
}

export default Carousel