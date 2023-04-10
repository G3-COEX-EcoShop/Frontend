import { GetStaticPaths } from 'next';
import React from 'react'

const categoryPage = () => {
    return (
        <div>categoryPage</div>
    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {



    return {
        paths: productSlugs.map(({ slug }) => ({
            params: {
                slug
            }
        })),
        fallback: 'blocking'
    }
}

export default categoryPage