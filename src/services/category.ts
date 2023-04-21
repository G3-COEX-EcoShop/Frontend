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
