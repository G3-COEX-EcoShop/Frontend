import useSWR, { SWRConfiguration } from "swr";
import { IProduct } from "../interfaces";

export const UseProduct = (url: string, config: SWRConfiguration = {}) => {
  const urlbase = process.env.NEXT_PUBLIC_URL_BASE;
  const { data, error } = useSWR<IProduct>(`${urlbase}${url}`, config);

  return {
    products: data || [],
    isLoading: !error && !data,
    isError: error,
  };
};
