import { IRole } from "@/interfaces";

export interface RoleState {
  isLoaded: boolean;
  rol: IRole;
}

type RolActionType =
  | {
      type: "[Rol] - LoadRol from cookies | storage";
      payload: IRole;
    }
  | { type: "[Rol] - Remove Rol" }
  | { type: "[Rol] - get rol from Cookies" };

export const rolReducer = (
  state: RoleState,
  action: RolActionType
): RoleState => {
  switch (action.type) {
    case "[Rol] - LoadRol from cookies | storage":
      return {
        ...state,
        isLoaded: true,
        rol: { ...action.payload },
      };
    case "[Rol] - Remove Rol":
      return {
        rol: {} as IRole,
        isLoaded: false,
      };
    default:
      return state;
  }
};
