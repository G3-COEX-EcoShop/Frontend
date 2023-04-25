import useSWR, { SWRConfiguration } from "swr";
import { IBrand, ICategory, IProduct } from "../interfaces";

export const UseBrands = (url: string, config: SWRConfiguration = {}) => {
  const urlbase = process.env.NEXT_PUBLIC_URL_BASE;
  const { data, error } = useSWR<IBrand[]>(`${urlbase}${url}`, config);

  return {
    data: data || [],
    isLoading: !error && !data,
    isError: error,
  };
};
