import useSWR, { SWRConfiguration } from "swr";
import { IProduct, IUser } from "../interfaces";
import { useState } from "react";

export const UseUsers = (url: string, config: SWRConfiguration = {}) => {
  const urlbase = process.env.NEXT_PUBLIC_URL_BASE;
  const [list, setlist] = useState(url);
  const { data, error } = useSWR<{ newUser: IUser[] }>(
    `${urlbase}${list}`,
    config
  );

  return {
    data: data?.newUser || [],
    setlist,
    isLoading: !error && !data,
    isError: error,
  };
};
