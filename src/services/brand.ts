import { IBrand } from "@/interfaces";

export const brandList = async () => {
  const urlbase = process.env.NEXT_PUBLIC_URL_BASE;
  let res = [] as IBrand[];
  try {
    const data = await fetch(`${urlbase}brand/list`);
    if (data) res = await data.json();
  } catch (error) {
    console.log(error);
    return [] as IBrand[];
  }
  return res;
};
