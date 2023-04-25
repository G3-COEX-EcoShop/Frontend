import { FC, PropsWithChildren, useEffect, useReducer } from 'react';
import Cookie from 'js-cookie';
import { RoleState, rolReducer } from './rolReducer';
import { IRole } from '@/interfaces';
import { RoleContext } from './RolContext';




const ROL_INITIAL_STATE: RoleState = {
    isLoaded: false,
    rol: {} as IRole,
}


export const RoleProvider: FC<PropsWithChildren> = ({ children }) => {

    const [state, dispatch] = useReducer(rolReducer, ROL_INITIAL_STATE);

    // Efecto
    useEffect(() => {
        try {
            const cookieRol = Cookie.get('rol') ? JSON.parse(Cookie.get('rol')!) : {}
            dispatch({ type: '[Rol] - LoadRol from cookies | storage', payload: cookieRol });
        } catch (error) {
            dispatch({ type: '[Rol] - LoadRol from cookies | storage', payload: {} as IRole });
        }
    }, []);

    useEffect(() => {
        Cookie.set('rol', JSON.stringify(state.rol));
    }, [state.rol]);


    const addRol = (rol: IRole) => {
        dispatch({ type: '[Rol] - LoadRol from cookies | storage', payload: rol });

    }
    const removeRol = () => {
        dispatch({ type: '[Rol] - Remove Rol' });
    }


    return (
        <RoleContext.Provider value={{
            ...state,
            addRol,
            removeRol,
        }}>
            {children}
        </RoleContext.Provider>
    )
};