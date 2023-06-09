import { ShopLayout } from '@/components/layout';
import { ProductList } from '@/components/product';
import { UseProducts } from '@/hooks/UseProducts';
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
    const { products: productsDinamic, isLoading, setlist, isError } = UseProducts(path);

    return (
        <ShopLayout title={`Productos de la categoria ${category.name}`} pageDescription={`Todos nuestros productos en la categorias de ${category.name}`} imageFullUrl={category.img_url}>

            <ProductList productsStatic={productsStatic} productsDinamic={productsDinamic} isLoading={isLoading} />
            <pre>
                {JSON.stringify(productsStatic, null, 2)}
            </pre>
        </ShopLayout>
    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const categories = await categoriesList();

    return {
        paths: categories.map((category) => {
            return {
                //solo se esta enviando slug
                params: {
                    slug: category.id,
                    img_url: category.img_url,
                    name: category.name,
                    description: category.description,
                    status: category.status + ""
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