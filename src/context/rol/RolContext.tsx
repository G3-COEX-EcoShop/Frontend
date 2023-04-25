import { IAddress, IProductCart, IRole } from '@/interfaces';
import { createContext } from 'react';


interface ContextProps {
    isLoaded: boolean;
    rol: IRole;
    // Methods
    addRol: (rol: IRole) => void;
    removeRol: () => void;
}


export const RoleContext = createContext({} as ContextProps);