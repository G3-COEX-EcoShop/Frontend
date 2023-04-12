export interface IProduct {
  id: number;
  category: string;
  brand: string;
  name: string;
  description: string;
  img_url: string;
  stock: number;
  price: number;
  status: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ICategory {
  id: string;
  name: string;
  description: string;
  img_url: string;
  status: boolean;
  createdAt: any;
  updatedAt: any;
}
