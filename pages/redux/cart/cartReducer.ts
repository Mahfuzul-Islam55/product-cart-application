import { InitialState } from "../product/InitialState";
import { IAction } from "../product/productType";
import { ADD_TO_CART } from "./cartActionType";

export const cartReducer = (state = InitialState, action: IAction) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_CART:
      const { product } = payload;
      return [
        ...state,
        {
          id: product?.id,
          name: product?.name,
          category: product?.category,
          url: product?.url,
          price: Number(product?.price),
          quantity: Number(product?.quantity),
        },
      ];
    default:
      return [...state];
  }
};
