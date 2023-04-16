import useSWR, { SWRConfiguration } from "swr";
import { IProduct } from "../interfaces";

const urlbase = process.env.NEXT_PUBLIC_URL_BASE;

export const UseProduct = (url: string, config: SWRConfiguration = {}) => {
  const { data, error } = useSWR<IProduct>(`${urlbase}${url}`, config);

  return {
    products: data || [],
    isLoading: !error && !data,
    isError: error,
  };
};
