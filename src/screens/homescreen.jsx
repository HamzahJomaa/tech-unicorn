import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { getProductsApi } from "../APIs/Products";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import SwiperItem from "../components/Carousel/swiperitem";
import ProductsTopFilter from "../components/ProductsTopFilter";


const Home = () =>{
    const [ loading, setLoading ] = useState(false)  
    const [ items, setItems ] = useState([])  

    const getProducts = async () => {
        setLoading(true)

        try{
            let result = await getProductsApi()
            setItems(result.data)
        }catch(e){
            console.error(e)
        }
        setLoading(false)

    }
    useEffect(() => {
        getProducts()
    }, [])

    return(
        <>
        {!loading ? <>
            <Banner 
                title={"Your Premium Sound, Unplugged!"} 
                subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "} 
                button={"Find out More"}     
            />

            <ProductsTopFilter items={items} />

            <Carousel 
                title={"Top Items"} 
                subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."} 
                items={items}
                />            

        </> : <Typography variant="h3">Loading..</Typography> } 
        
        </>
    )
}


export default Home