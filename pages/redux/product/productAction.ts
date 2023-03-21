import { ADD_PRODUCT_TO_CART, CREATE_PRODUCT } from "./ProductActionType";
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
