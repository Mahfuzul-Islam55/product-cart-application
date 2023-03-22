import { InitialState } from "../product/InitialState";
import { IAction } from "../product/productType";
import {
  ADD_TO_CART,
  DECREMENT_AMOUNT,
  DELETE_CART_ITEM,
  UPDATE_CART,
} from "./cartActionType";
import { InitialStateCart } from "./InitialStateCart";

export const cartReducer = (state = InitialStateCart, action: IAction) => {
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
          quantity: Number(1),
        },
      ];
    case UPDATE_CART:
      return state.map((cart) => {
        if (cart.id === payload.id) {
          return {
            ...cart,
            quantity: cart.quantity + 1,
          };
        }
        return {
          ...cart,
        };
      });
    case DECREMENT_AMOUNT:
      return state.map((cart) => {
        if (cart.id === payload.id) {
          return {
            ...cart,
            quantity: cart.quantity - 1,
          };
        }
        return {
          ...cart,
        };
      });
    case DELETE_CART_ITEM:
      return state.filter((cart) => cart.id !== payload.id);
    default:
      return [...state];
  }
};
