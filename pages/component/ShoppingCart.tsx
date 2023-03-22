import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementAmountCart, updateCart } from "../redux/cart/cartAction";

import {
  addProductToCart,
  decrementingProductFromCart,
} from "../redux/product/productAction";
import { IInitialState, IProduct } from "../redux/product/productType";
import { IRootState } from "../redux/stateType";

interface props {
  cartProduct: IInitialState;
}

const ShoppingCart = ({ cartProduct }: props) => {
  const { name, category, url, id, price, quantity } = cartProduct;
  const allProduct: any = useSelector((state: IRootState) => state.product);
  const [maxItemInclude, setMaxItemInclude] = useState<number>(2);
  const dispatch = useDispatch();

  const product = () => {
    let max: IProduct = allProduct.find(
      (product: IProduct) => product.id === id
    );
    return max ? max.quantity : 0;
  };

  const addingMoreProductNumberHandle = () => {
    setMaxItemInclude(product());
    dispatch(updateCart(id));
    dispatch(addProductToCart(id));
  };

  const removingProductNumberHandle = () => {
    dispatch(decrementAmountCart(id));
    dispatch(decrementingProductFromCart(id));
    setMaxItemInclude(product());
    console.log(maxItemInclude);
  };

  useEffect(() => {
    setMaxItemInclude(product());
  }, []);

  return (
    <div className="cartCard">
      <div className="flex items-center col-span-6 space-x-6">
        {/* <!-- cart image --> */}
        <img className="lws-cartImage" src={url} alt="product" />
        {/* <!-- cart item info --> */}
        <div className="space-y-2">
          <h4 className="lws-cartName">{name}</h4>
          <p className="lws-cartCategory">{category}</p>
          <p>
            BDT <span className="lws-cartPrice">{price}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        {/* <!-- amount buttons --> */}
        <div className="flex items-center space-x-4">
          {maxItemInclude > 1 ? (
            <button
              className="lws-incrementQuantity"
              onClick={addingMoreProductNumberHandle}
            >
              <i className="text-lg fa-solid fa-plus"></i>
            </button>
          ) : (
            <button
              className="lws-incrementQuantity"
              onClick={addingMoreProductNumberHandle}
              disabled
            >
              <i className="text-lg fa-solid fa-plus"></i>
            </button>
          )}
          <span className="lws-cartQuantity">{quantity}</span>
          {quantity > 1 ? (
            <button
              className="lws-decrementQuantity"
              onClick={removingProductNumberHandle}
            >
              <i className="text-lg fa-solid fa-minus"></i>
            </button>
          ) : (
            <button
              className="lws-decrementQuantity"
              onClick={removingProductNumberHandle}
              disabled
            >
              <i className="text-lg fa-solid fa-minus"></i>
            </button>
          )}
        </div>
        {/* <!-- price --> */}
        <p className="text-lg font-bold">
          BDT <span className="lws-calculatedPrice">{price * quantity}</span>
        </p>
      </div>
      {/* <!-- delete button --> */}
      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button className="lws-removeFromCart">
          <i className="text-lg text-red-400 fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
