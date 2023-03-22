import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { IInitialState, IProduct } from "../redux/product/productType";
import { IRootState } from "../redux/stateType";
import ShoppingCart from "./ShoppingCart";

const ShoppingCartList = () => {
  const allCart: any = useSelector((state: IRootState) => state.cart);

  return (
    <Fragment>
      {allCart.map((cart: IInitialState) => (
        <ShoppingCart cartProduct={cart} key={cart.id} />
      ))}
    </Fragment>
  );
};

export default ShoppingCartList;
