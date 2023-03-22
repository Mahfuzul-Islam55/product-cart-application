import { IInitialStateCart } from "./count/initialStateCount";
import { IProduct } from "./product/productType";

export interface IRootState {
  product: IProduct[];
  cart: IProduct[];
  count: IInitialStateCart;
}
