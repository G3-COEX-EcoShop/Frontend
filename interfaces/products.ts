export interface IProducts {
    _id: string;
    description: string;
    images: string[];
    inStock: number;
    price: number;
    title: string;
    category: 'computadoras' | 'celulares' | 'audio' | 'televisores'
} 