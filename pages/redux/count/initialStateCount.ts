export interface IInitialStateCart {
  cartNumber: number;
  cartBill: number;
}

export const initialStateCart: IInitialStateCart = {
  cartNumber: 0,
  cartBill: 0,
};

export interface IAction {
  type: string;
  payload?: IPayload;
}

export interface IPayload {
  cartNumber?: number;
  cartBill?: number;
  id?: number;
}
