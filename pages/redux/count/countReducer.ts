import { DECREMENT_CART, TOTAL_CART } from "./countType";
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
        cartNumber: state!.cartNumber - 1,
      };

    default:
      return { ...state };
  }
};
