export interface IProduct {
  id?: number;
  category?: string;
  brand?: string;
  name?: string;
  description?: string;
  img_url?: string;
  stock?: number;
  price?: number;
  status?: boolean;
  createdAt?: string;
  updatedAt?: string;
  Brand?: IBrand;
  Category?: ICategory;
  Reviews?: IReview[];
  ProductCel?: IProductCel;
  ProductLaptop?: IProductLaptop;
  ProductTV?: IProductTv;
}
export interface IProductCart {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  status: boolean;
}

export interface ICategory {
  id: string;
  name?: string;
  description?: string;
  img_url?: string;
  status?: boolean;
  createdAt?: any;
  updatedAt?: any;
}

export interface IBrand {
  id: string;
  name: string;
  description: string;
  img_url: string;
  status: boolean;
  createdAt?: any;
  updatedAt?: any;
}

export interface IReview {
  id: number;
  description: string;
  point: number;
  id_product: number;
  id_user: number;
  createdAt: string;
  updatedAt: string;
}

export interface IProductCel {
  id: number;
  id_product: number;
  operating_system: string;
  storage: string;
  ram: string;
  processor: string;
  screen_size: string;
  resolution: string;
  main_camera: string;
  front_camera: string;
  battery: string;
  createdAt: string;
  updatedAt: string;
}

export interface IProductTv {
  id: number;
  id_product: number;
  display_technology: string;
  resolution: string;
  screen_size: string;
  hdmi: string;
  createdAt: string;
  updatedAt: string;
}

export interface IProductLaptop {
  id: number;
  id_product: number;
  cpu_brand: string;
  cpu_model: string;
  graphics_coprocessor: string;
  storage: string;
  ram: string;
  operating_system: string;
  screen_size: string;
  resolution: string;
  createdAt: string;
  updatedAt: string;
}
