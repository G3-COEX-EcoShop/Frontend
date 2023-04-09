import useSWR, { SWRConfiguration } from "swr";
import { IProduct } from "../interfaces";
import { useState } from "react";

const urlbase = process.env.NEXT_PUBLIC_URL_BASE;

export const useProducts = (url: string, config: SWRConfiguration = {}) => {
  const [list, setlist] = useState(url);
  const { data, error } = useSWR<IProduct[]>(`${urlbase}${list}`, config);

  return {
    products: data || [],
    setlist,
    isLoading: !error && !data,
    isError: error,
  };
};
