import { IAddress, IProductCart } from '@/interfaces';
import { createContext } from 'react';


interface ContextProps {
    isLoaded: boolean;
    cart: IProductCart[];
    numberOfItems: number;
    subTotal: number;
    tax: number;
    total: number;

    shippingAddress?: IAddress,

    // Methods
    addProductToCart: (product: IProductCart) => void;
    updateCartQuantity: (product: IProductCart) => void;
    removeCartProduct: (product: IProductCart) => void;
    updateAddress: (address: IAddress) => void;

    // Orders
    //createOrder: () => Promise<{ hasError: boolean; message: string; }>;
}


export const CartContext = createContext({} as ContextProps);