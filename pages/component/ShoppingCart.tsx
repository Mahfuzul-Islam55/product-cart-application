import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementAmountCart,
  deleteCartItem,
  updateCart,
} from "../redux/cart/cartAction";
import {
  decrementCart,
  decrementingBill,
  incrementingBill,
  totalCart,
} from "../redux/count/countAction";

import {
  addProductToCart,
  decrementingProductFromCart,
  deletingProductFromCart,
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
    console.log("after decrement", max.quantity);
    return max.quantity;
  };

  const addingMoreProductNumberHandle = () => {
    dispatch(updateCart(id));
    dispatch(addProductToCart(id));
    dispatch(totalCart());
    dispatch(incrementingBill(price));
    let max: IProduct = allProduct.find(
      (product: IProduct) => product.id === id
    );
    setMaxItemInclude(max.quantity - 1);
  };

  const removingProductNumberHandle = () => {
    dispatch(decrementAmountCart(id));
    dispatch(decrementingProductFromCart(id));
    dispatch(decrementCart());
    dispatch(decrementingBill(price));
    let max: IProduct = allProduct.find(
      (product: IProduct) => product.id === id
    );
    setMaxItemInclude(max.quantity + 1);
  };

  const deleteCartHandle = (id: number, quantity: number) => {
    dispatch(deleteCartItem(id));
    dispatch(decrementCart(quantity));
    dispatch(deletingProductFromCart(id, quantity));
    dispatch(decrementingBill(price * quantity));
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
          {maxItemInclude >= 1 ? (
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
        <button
          className="lws-removeFromCart"
          onClick={() => deleteCartHandle(id, quantity)}
        >
          <i className="text-lg text-red-400 fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
