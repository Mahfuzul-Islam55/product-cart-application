import { DECREMENT_CART, TOTAL_CART } from "./countType";

export const totalCart = () => {
  return {
    type: TOTAL_CART,
    payload: {},
  };
};

export const decrementCart = () => {
  return {
    type: DECREMENT_CART,
    payload: {},
  };
};
