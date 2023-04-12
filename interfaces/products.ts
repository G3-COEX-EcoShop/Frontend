export interface IProduct {
    _id: string;
    description: string;
    images: string;
    /* inStock: number;*/
    price: number;
    /* sizes: ValidSizes[]; */
    /* slug: string; */
    /* tags: string[]; */
    title: string;
    summary: string;
    /* type: ValidTypes; */
    gender: 'computadoras' | 'celulares' | 'audio' | 'televisores'
}

