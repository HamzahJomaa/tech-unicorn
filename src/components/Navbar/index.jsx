import React from "react";
import { Grid, Link, Badge, TextField, Box } from "@mui/material";
import style from "./navbar.module.scss"
import FavoriteBorderOutlinedIcon  from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const NavBar = () => {
    const path = window.location.pathname
    return (
        <Box style={{backgroundColor: "#F4F7F8", padding: ".5rem 0"}}>
            <Grid container className={style.Container}>
                <Grid item xs={3} className={style.MenuContainer}>
                    <Link className={`${path === "/shop" ? style.active : ''}`} href="/shop"> Shop </Link>
                    <Link className={`${path === "/promo" ? style.active : ''}`}  href="/promo"> Promo </Link>
                    <Link className={`${path === "/about" ? style.active : ''}`}  href="/about"> About </Link>
                    <Link className={`${path === "/blog" ? style.active : ''}`}  href="/blog"> Blog </Link>
                </Grid>
                <Grid item xs={6} className={style.SearchContainer}>
                    <Box className={style.Search}>
                        <TextField placeholder="Search" variant="standard" fullWidth />
                        <SearchOutlinedIcon fontSize="large" color="action" />
                    </Box>
                </Grid>
                <Grid item xs={3} className={style.NavbarLogoContainer}>
                    <FavoriteBorderOutlinedIcon fontSize="large" /> 
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlinedIcon fontSize="large" />
                    </Badge>
                    <PersonOutlinedIcon fontSize="large" />
                    <NotificationsNoneOutlinedIcon fontSize="large" />
                </Grid>
            </Grid>
        </Box>
    )
}


export default NavBar