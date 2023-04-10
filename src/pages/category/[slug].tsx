import { ProductList } from '@/components/product';
import { useProducts } from '@/hooks/useProduct';
import { ICategory, IProduct } from '@/interfaces';
import { categoriesList } from '@/services/category';
import { productsByCategory } from '@/services/product';
import { GetStaticPaths, GetStaticProps } from 'next';
import React, { FC } from 'react'

interface Props {
    productsStatic: IProduct[]
    path: string
    category: ICategory
}

const categoryPage: FC<Props> = ({ productsStatic, path, category }) => {
    const { products: productsDinamic, isLoading, setlist, isError } = useProducts('product/list');

    console.log({ productsStatic, path, category });

    return (
        <ProductList productsStatic={productsStatic} productsDinamic={productsDinamic} isLoading={isLoading} />
    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const categories = await categoriesList();

    return {
        paths: categories.map((category) => {
            return {
                params: {
                    slug: category.id,
                    img_url: category.img_url,
                    name: category.name,
                    description: category.description,
                    state: category.state + ""
                }
            }
        }
        ),
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { state, slug = "" } = params as any
    const product = await productsByCategory(slug);

    if (!product.data || state == "0") {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            product: product.data,
            path: product.path,
            category: params
        },
        revalidate: 28800
    }
}

export default categoryPage