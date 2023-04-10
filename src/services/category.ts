import { ICategory } from "@/interfaces";
const urlbase = process.env.NEXT_PUBLIC_URL_BASE;

export const categoryList = async () => {
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
