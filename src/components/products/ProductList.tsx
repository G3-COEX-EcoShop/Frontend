/* product list */

import React from "react"
import { FC } from "react"
import { Grid } from "@mui/material"
import { IProducts } from "../../../interfaces"
import { ProductCard } from "./ProductCard"

interface Props {
    products: IProducts[]
}


export const ProductList: FC <Props>  = ({ products }) => {
  return (
    <Grid container spacing={4}>
        {
            products.map( products => (
                <ProductCard 
                    key={ products._id }
                    products={ products }
                />
            ))
            
        }
    </Grid>
    )
}