/* product list */

import React from "react"
import { FC } from "react"
import { Grid } from "@mui/material"
import { ProductCard } from "./ProductCard"
import { IProduct } from "../../../interfaces"

interface Props {
    products: IProduct[]
}


export const ProductList: FC<Props> = ({ products }) => {
    return (
        <Grid container spacing={4}>
            {
                products.map((products, i) => (
                    <ProductCard
                        key={i}
                        products={products}
                    />
                ))

            }
        </Grid>
    )
}