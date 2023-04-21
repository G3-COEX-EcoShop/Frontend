import useSWR, { SWRConfiguration } from "swr";
import { IUser } from "../interfaces";
import { useState } from "react";

export const UseUser = (
  idUser: string | undefined,
  config: SWRConfiguration = {}
) => {
  const urlbase = process.env.NEXT_PUBLIC_URL_BASE;
  const { data, error } = useSWR<IUser>(`${urlbase}user/query?id=${idUser}`);

  return {
    user: data || undefined,
    isLoading: !error && !data,
    isError: error,
  };
};
