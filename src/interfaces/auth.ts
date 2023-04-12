interface IUserRol {
  id: number;
  name: string;
  email: string;
  password: null;
  rol: string;
  membership: boolean;
  status: boolean;
  github: boolean;
  createdAt: string;
  updatedAt: string;
  Role: Role;
}

interface Role {
  id: string;
  name: string;
  description: string;
  dashboard: boolean;
  p_product: string;
  p_category: string;
  p_orders: string;
  p_reviews: string;
  createdAt: string;
  updatedAt: string;
  productPermission: Permission;
  categoryPermission: Permission;
  ordersPermission: Permission;
  reviewsPermission: Permission;
}

interface Permission {
  id: string;
  name: string;
  can_manager: boolean;
  can_create: boolean;
  can_read: boolean;
  can_update: boolean;
  can_delete: boolean;
  can_activate: boolean;
  createdAt: null | string;
  updatedAt: null | string;
}
