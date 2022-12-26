import React from "react";
import { Box, Typography } from "@mui/material";
import style from "./productstopfilter.module.scss"
import { useEffect } from "react";
import { useState } from "react";
import Item from "./product_item";
import { COLORS } from "../../constants/colors";

const ProductsTopFilter = ({items}) => {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState(items)

    useEffect(()=>{
        setCategories([...new Set(items.map(item => item.category))])
    },[])


    const handleFiltering = (item) => {
        if (item){
            setProducts(items.filter(i => i.category === item))
        }else{
            setProducts(items)
        }
    }


    return (
        <Box style={{backgroundColor:COLORS.LIGHT_PRIMARY, padding: "2rem 0"}}>
            <Box className={style.Container}>
                <Typography variant="h3"> Our Premium Collection </Typography>
                { categories && categories.map((item,index) => {
                    if (index === 0)
                        return (<Typography onClick={() => { handleFiltering(null) }} variant="p"> All Products </Typography>)
                    return (
                        <Typography onClick={() => { handleFiltering(item) }} variant="p"> {item} </Typography>
                    )
                }) }
                
            </Box>
            {products && 
                
                    <Box className={style.ProductFilter}>
                        {products.slice(0,8).map(p => (<Item item={p} />))}
                    </Box>
            
            }
        </Box>
    )
}
export default ProductsTopFilter