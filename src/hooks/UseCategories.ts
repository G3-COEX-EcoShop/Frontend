import useSWR, { SWRConfiguration } from "swr";
import { ICategory, IProduct } from "../interfaces";

export const UseCategories = (url: string, config: SWRConfiguration = {}) => {
  const urlbase = process.env.NEXT_PUBLIC_URL_BASE;
  const { data, error } = useSWR<ICategory[]>(`${urlbase}${url}`, config);

  return {
    products: data || [],
    isLoading: !error && !data,
    isError: error,
  };
};
