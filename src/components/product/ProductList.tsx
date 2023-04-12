/* product list */

import React from "react"
import { FC } from "react"
import { Grid } from "@mui/material"
import { ProductCard } from "./ProductCard"
import { IProduct } from "../../interfaces"
import { useProducts } from "@/hooks/useProduct"

interface Props {
    productsStatic: IProduct[]
}


export const ProductList: FC<Props> = ({ productsStatic }) => {
    const { products: productsDinamic, isLoading, setlist, isError } = useProducts('product/list');


    return (
        <Grid container spacing={4}>
            {
                productsStatic.length && productsStatic.map((product, i) => (
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