import {
  ADD_PRODUCT_TO_CART,
  CREATE_PRODUCT,
  DECREMENT_PRODUCT_AMOUNT_FROM_CART,
} from "./ProductActionType";
import { IAction, IInitialState } from "./productType";
import { InitialState } from "./InitialState";

const maxId = (state: IInitialState[]) => {
  const maxNumber = state.reduce(
    (maxNumber, value: IInitialState) => Math.max(maxNumber, value.id),
    -1
  );

  return maxNumber + 1;
};
export const productReducer = (state = InitialState, action: IAction) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_PRODUCT:
      const { product } = payload;
      return [
        ...state,
        {
          id: maxId(state),
          name: product?.name,
          category: product?.category,
          url: product?.url,
          price: Number(product?.price),
          quantity: Number(product?.quantity),
        },
      ];
    case ADD_PRODUCT_TO_CART:
      return state.map((product) => {
        if (product.id == payload.id) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return {
          ...product,
        };
      });
    case DECREMENT_PRODUCT_AMOUNT_FROM_CART:
      return state.map((product) => {
        if (product.id == payload.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return {
          ...product,
        };
      });
    default:
      return [...state];
  }
};
