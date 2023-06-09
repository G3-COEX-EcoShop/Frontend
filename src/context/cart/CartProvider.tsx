import { FC, PropsWithChildren, useEffect, useReducer } from 'react';
import Cookie from 'js-cookie';
import { CartState, cartReducer } from './cartReducer';
import { IAddress, IProductCart } from '@/interfaces';
import { CartContext } from './CartContext';



const CART_INITIAL_STATE: CartState = {
    isLoaded: false,
    cart: [],
    numberOfItems: 0,
    subTotal: 0,
    tax: 0,
    total: 0,
    shippingAddress: undefined
}


export const CartProvider: FC<PropsWithChildren> = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

    // Efecto
    useEffect(() => {
        try {
            const cookieProducts = Cookie.get('cart') ? JSON.parse(Cookie.get('cart')!) : []
            dispatch({ type: '[Cart] - LoadCart from cookies | storage', payload: cookieProducts });
        } catch (error) {
            dispatch({ type: '[Cart] - LoadCart from cookies | storage', payload: [] });
        }
    }, []);


    useEffect(() => {

        if (Cookie.get('firstName')) {
            const shippingAddress: IAddress = {

                name: Cookie.get('name') || '',
                city: Cookie.get('city') || '',
                country: Cookie.get('country') || '',
                description: Cookie.get('description') || '',
            }

            dispatch({ type: '[Cart] - LoadAddress from Cookies', payload: shippingAddress })
        }
    }, [])




    useEffect(() => {
        Cookie.set('cart', JSON.stringify(state.cart));
    }, [state.cart]);


    useEffect(() => {

        const numberOfItems = state.cart.reduce((prev, current) => current.quantity + prev, 0);
        const subTotal = state.cart.reduce((prev, current) => (current.price * current.quantity) + prev, 0);
        const taxRate = Number(process.env.NEXT_PUBLIC_TAX_RATE || 0);

        const orderSummary = {
            numberOfItems,
            subTotal,
            tax: subTotal * taxRate,
            total: subTotal * (taxRate + 1)
        }

        dispatch({ type: '[Cart] - Update order summary', payload: orderSummary });
    }, [state.cart]);



    const addProductToCart = (product: IProductCart) => {
        //! Nivel 1
        // dispatch({ type: '[Cart] - Add Product', payload: product });

        //! Nivel 2
        // const productsInCart = state.cart.filter( p => p._id !== product._id && p.size !== product.size );
        // dispatch({ type: '[Cart] - Add Product', payload: [...productsInCart, product] })

        //! Nivel Final
        const productInCart = state.cart.some(p => p.id === product.id);
        if (!productInCart) return dispatch({ type: '[Cart] - Update products in cart', payload: [...state.cart, product] })

        const productInCartButDifferentSize = state.cart.some(p => p.id === product.id);
        if (!productInCartButDifferentSize) return dispatch({ type: '[Cart] - Update products in cart', payload: [...state.cart, product] })

        // Acumular
        const updatedProducts = state.cart.map(p => {
            if (p.id !== product.id) return p;


            // Actualizar la cantidad
            p.quantity += product.quantity;
            return p;
        });

        dispatch({ type: '[Cart] - Update products in cart', payload: updatedProducts });

    }

    const updateCartQuantity = (product: IProductCart) => {
        dispatch({ type: '[Cart] - Change cart quantity', payload: product });
    }

    const removeCartProduct = (product: IProductCart) => {
        dispatch({ type: '[Cart] - Remove product in cart', payload: product });
    }

    const updateAddress = (address: IAddress) => {
        Cookie.set('name', address.name);
        Cookie.set('city', address.city);
        Cookie.set('country', address.country);
        Cookie.set('description', address.description || '');

        dispatch({ type: '[Cart] - Update Address', payload: address });
    }


    // const createOrder = async (): Promise<{ hasError: boolean; message: string; }> => {

    //     if (!state.shippingAddress) {
    //         throw new Error('No hay dirección de entrega');
    //     }
    //     TODO any -> interface ordenes
    //     const body: any = {
    //         orderItems: state.cart.map(p => ({
    //             ...p,
    //         })),
    //         shippingAddress: state.shippingAddress,
    //         numberOfItems: state.numberOfItems,
    //         subTotal: state.subTotal,
    //         tax: state.tax,
    //         total: state.total,
    //         isPaid: false
    //     }


    //     try {
    //         //fetch ordres
    //         // const { data } = await tesloApi.post<IOrder>('/orders', body);

    //         dispatch({ type: '[Cart] - Order complete' });

    //         return {
    //             hasError: false,
    //             message: data.id!
    //         }


    //     } catch (error) {
    //         // if (axios.isAxiosError(error)) {
    //         //     return {
    //         //         hasError: true,
    //         //         message: error.response?.data.message
    //         //     }
    //         // }
    //         // return {
    //         //     hasError: true,
    //         //     message: 'Error no controlado, hable con el administrador'
    //         // }
    //     }

    // }


    return (
        <CartContext.Provider value={{
            ...state,

            // Methods
            addProductToCart,
            removeCartProduct,
            updateCartQuantity,
            updateAddress,

            // Orders
            //createOrder,
        }}>
            {children}
        </CartContext.Provider>
    )
};