import {
  DECREMENT_BILL,
  DECREMENT_CART,
  INCREMENT_BILL,
  TOTAL_CART,
} from "./countType";

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

export const incrementingBill = (price: number) => {
  return {
    type: INCREMENT_BILL,
    payload: {
      amount: price,
    },
  };
};

export const decrementingBill = (price: number) => {
  return {
    type: DECREMENT_BILL,
    payload: {
      amount: price,
    },
  };
};
