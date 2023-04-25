import { FC, PropsWithChildren, useEffect, useReducer } from 'react';
import Cookie from 'js-cookie';
import { RoleState, rolReducer } from './rolReducer';
import { IRole, IUserRol } from '@/interfaces';
import { RoleContext } from './RolContext';
import jwt_decode from "jwt-decode";


const ROL_INITIAL_STATE: RoleState = {
    isLoaded: false,
    rol: {} as IRole,
}


export const RoleProvider: FC<PropsWithChildren> = ({ children }) => {

    const [state, dispatch] = useReducer(rolReducer, ROL_INITIAL_STATE);

    // Efecto
    useEffect(() => {
        try {
            const token = Cookie.get('token')
            if (token) {
                const { user } = jwt_decode<{ user: IUserRol }>(token);
                dispatch({ type: '[Rol] - LoadRol from cookies | storage', payload: user.Role });

            }

        } catch (error) {
            dispatch({ type: '[Rol] - LoadRol from cookies | storage', payload: {} as IRole });
        }
    }, []);

    const addRol = (token: string) => {
        try {
            const { user } = jwt_decode<{ user: IUserRol }>(token);
            dispatch({ type: '[Rol] - LoadRol from cookies | storage', payload: user.Role });
        } catch (error) {

        }

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


