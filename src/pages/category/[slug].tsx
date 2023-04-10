import { ShopLayout } from '@/components/layout';
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
    const { products: productsDinamic, isLoading, setlist, isError } = useProducts(path);

    console.log({ productsStatic, path, category });

    return (
        <ShopLayout title={`Productos de la categoria ${category.name}`} pageDescription={`Todos nuestros productos en la categorias de ${category.name}`} imageFullUrl={category.img_url}>

            <ProductList productsStatic={productsStatic} productsDinamic={productsDinamic} isLoading={isLoading} />
        </ShopLayout>
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
            productsStatic: product.data,
            path: product.path,
            category: params
        },
        revalidate: 28800
    }
}

export default categoryPage