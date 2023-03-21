import { CREATE_PRODUCT } from "./ProductActionType";
import { IProductType } from "./productType";

export const createProduct = (product: IProductType) => {
  return {
    type: CREATE_PRODUCT,
    payload: {
      product: product,
    },
  };
};
