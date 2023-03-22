import {
  DECREMENT_BILL,
  DECREMENT_CART,
  INCREMENT_BILL,
  TOTAL_CART,
} from "./countType";
import { IAction, initialStateCart } from "./initialStateCount";

export const countReducer = (state = initialStateCart, action: IAction) => {
  const { type, payload } = action;
  switch (type) {
    case TOTAL_CART:
      return {
        ...state,
        cartNumber: state!.cartNumber + 1,
      };
    case DECREMENT_CART:
      return {
        ...state,
        cartNumber: state!.cartNumber - payload!.id!,
      };
    case INCREMENT_BILL:
      return {
        ...state,
        cartBill: state!.cartBill + payload!.amount!,
      };
    case DECREMENT_BILL:
      return {
        ...state,
        cartBill: state!.cartBill - payload!.amount!,
      };
    default:
      return { ...state };
  }
};
