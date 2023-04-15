/* product list */

import React from "react"
import { FC } from "react"
import { Grid } from "@mui/material"
import { ProductCard } from "./ProductCard"
import { IProduct } from "../../interfaces"

interface Props {
    productsStatic: IProduct[]
    productsDinamic: IProduct[]
    isLoading: boolean
}


export const ProductList: FC<Props> = ({ productsStatic, productsDinamic, isLoading }) => {



    return (
        <Grid container spacing={4}>
            {
                productsStatic && productsStatic.length && productsStatic.map((product, i) => (
                    <ProductCard
                        key={i}
                        product={product}
                        price={productsDinamic.find((item) => (item.id === product.id))?.price

                        }
                        isLoading={isLoading}
                    />
                ))

            }
        </Grid>
    )
}