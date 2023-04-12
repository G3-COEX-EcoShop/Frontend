export interface IProduct {
  id: number;
  category: string;
  brand: string;
  name: string;
  description: string;
  urlImg: string;
  stock: number;
  price: number;
  state: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ICategory {
  id: string;
  name: string;
  description: string;
  img_url: string;
  state: boolean;
  createdAt: any;
  updatedAt: any;
}
