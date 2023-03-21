import { CREATE_PRODUCT } from "./ProductActionType";
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
          price: product?.price,
          quantity: product?.quantity,
        },
      ];

    default:
      return [...state];
  }
};
