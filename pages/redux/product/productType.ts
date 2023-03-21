export interface IProductType {
  name: string;
  category: string;
  url: string;
  price: number;
  quantity: number;
}

export interface IAction {
  type: string;
  payload: IPayload;
}

export interface IPayload {
  product?: IProduct;
  id?: string;
}

export interface IProduct {
  id?: number;
  name: string;
  category: string;
  url: string;
  price: number;
  quantity: number;
}
export interface IInitialState {
  id: number;
  name: string;
  category: string;
  url: string;
  price: number;
  quantity: number;
}
