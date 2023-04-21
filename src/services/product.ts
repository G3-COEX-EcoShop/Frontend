import { IProduct } from "@/interfaces";
import products from "@/pages/dashboard/products";
import path from "path";
const urlbase = process.env.NEXT_PUBLIC_URL_BASE || "";

export const productsList = async () => {
  let products = [] as IProduct[];
  try {
    const dataProducts = await fetch(`${urlbase}product/list`);
    if (dataProducts) products = await dataProducts.json();
  } catch (error) {
    console.log(error);
    return [] as IProduct[];
  }
  return products;
};
export const productsQuery = async (id: string) => {
  let result = { data: {}, path: "" };
  result.data = {} as IProduct;
  result.path = `product/query?id=${id}`;

  try {
    const dataProduct = await fetch(urlbase + result.path + "");

    if (dataProduct) {
      const products = await dataProduct.json();
      result.data = products;
    }
  } catch (error) {
    console.log(error);
  }
  return result;
};

export const productsByCategory = async (nameCategory: string) => {
  let products = [] as IProduct[];
  const path = `product/listByCategory?id=${nameCategory}`;
  let result = { data: products, path: path };
  try {
    const dataProducts = await fetch(urlbase + path);
    if (dataProducts) products = await dataProducts.json();
    result.data = products;
  } catch (error) {
    console.log(error);
    return result;
  }
  return result;
};
