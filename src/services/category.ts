import { ICategory } from "@/interfaces";

export const categoriesList = async () => {
  const urlbase = process.env.NEXT_PUBLIC_URL_BASE;
  let categories = [] as ICategory[];
  try {
    const dataCategories = await fetch(`${urlbase}category/list`);
    if (dataCategories) categories = await dataCategories.json();
  } catch (error) {
    console.log(error);
    return [] as ICategory[];
  }
  return categories;
};

export const categoryQuery = async (id: string) => {
  const urlbase = process.env.NEXT_PUBLIC_URL_BASE;
  let result = { data: {}, path: "" };
  result.data = {} as ICategory;
  result.path = `category/query?id=${id}`;
  try {
    const dataFetch = await fetch(urlbase + result.path + "");
    if (dataFetch) result.data = await dataFetch.json();
  } catch (error) {
    console.log(error);
  }
  return result;
};
