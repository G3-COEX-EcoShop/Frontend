export interface IUser {
  id?: number;
  name: string;
  email: string;
  password: string;
  rol?: string;
  membership: boolean;
  status: boolean;
  github?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  Reviews?: any[];
  Addresses?: IAddress[];
  PaymentMethods?: IPaymentMethod[];
  Orders?: any[];
}

export interface IAddress {
  id?: number;
  name: string;
  country: string;
  city: string;
  description: string;
  id_user?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IPaymentMethod {
  id: number;
  name: string;
  type: string;
  info: string;
  id_user: number;
  createdAt: Date;
  updatedAt: Date;
}
