import { IRole } from '@/interfaces';
import { createContext } from 'react';


interface ContextProps {
    isLoaded: boolean;
    rol: IRole;
    // Methods
    addRol: (token: string) => void;
    removeRol: () => void;
}


export const RoleContext = createContext({} as ContextProps);