import { IProduct } from "@/interfaces";
const urlbase = process.env.NEXT_PUBLIC_URL_BASE;

export const productList = async () => {
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
