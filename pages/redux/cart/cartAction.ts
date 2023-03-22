import { IProduct } from "../product/productType";
import { ADD_TO_CART, DECREMENT_AMOUNT, UPDATE_CART } from "./cartActionType";

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

export const decrementAmountCart = (id: number) => {
  return {
    type: DECREMENT_AMOUNT,
    payload: {
      id: id,
    },
  };
};
