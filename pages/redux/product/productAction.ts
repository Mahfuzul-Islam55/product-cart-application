import {
  ADD_PRODUCT_TO_CART,
  CREATE_PRODUCT,
  DECREMENT_PRODUCT_AMOUNT_FROM_CART,
  DELETING_PRODUCT_FROM_CART,
} from "./ProductActionType";
import { IProductType } from "./productType";

export const createProduct = (product: IProductType) => {
  return {
    type: CREATE_PRODUCT,
    payload: {
      product: product,
    },
  };
};

export const addProductToCart = (id: number) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: {
      id: id,
    },
  };
};

export const decrementingProductFromCart = (id: number) => {
  return {
    type: DECREMENT_PRODUCT_AMOUNT_FROM_CART,
    payload: {
      id: id,
    },
  };
};

export const deletingProductFromCart = (id: number, amount: number) => {
  return {
    type: DELETING_PRODUCT_FROM_CART,
    payload: {
      id: id,
      amount: amount,
    },
  };
};
