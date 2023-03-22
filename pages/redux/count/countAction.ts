import { DECREMENT_CART, TOTAL_CART } from "./countType";

export const totalCart = () => {
  return {
    type: TOTAL_CART,
    payload: {},
  };
};

export const decrementCart = (id: number = 1) => {
  return {
    type: DECREMENT_CART,
    payload: {
      id: id,
    },
  };
};
