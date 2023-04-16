import useSWR, { SWRConfiguration } from "swr";
import { IUser } from "../interfaces";
import { useState } from "react";

const urlbase = process.env.NEXT_PUBLIC_URL_BASE;

export const UseUser = (
  idUser: string | undefined,
  config: SWRConfiguration = {}
) => {
  const { data, error } = useSWR<IUser>(`${urlbase}user/query?id=${idUser}`);

  return {
    user: data || undefined,
    isLoading: !error && !data,
    isError: error,
  };
};
