import { IProduct } from "../product/productType";
import { ADD_TO_CART, UPDATE_CART } from "./cartActionType";

export const addCart = (product: IProduct) => {
  return {
    type: ADD_TO_CART,
    payload: {
      product: product,
    },
  };
};

export const updateCart = (id: number) => {
  return {
    type: UPDATE_CART,
    payload: {
      id: id,
    },
  };
};
