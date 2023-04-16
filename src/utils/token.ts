import { IUserRol } from "@/interfaces";
import jwt_decode from "jwt-decode";

export const getIdAndEmailUser = (token: string) => {
  const { user } = jwt_decode<{ user: IUserRol }>(token + "");
  return { id: user.id, email: user.email };
};
