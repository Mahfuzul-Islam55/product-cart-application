import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IInitialState } from "../redux/product/productType";
import { addCart, updateCart } from "../redux/cart/cartAction";
import { addProductToCart } from "../redux/product/productAction";
import { IRootState } from "../redux/stateType";
interface props {
  product: IInitialState;
}

const Product = ({ product }: props) => {
  const dispatch = useDispatch();
  const allCartProduct: any = useSelector((state: IRootState) => state.cart);
  const addToCartHandle = () => {
    const found = allCartProduct.some((cart: IInitialState) => {
      if (cart.id === product.id) return true;
      return false;
    });

    if (found) dispatch(updateCart(product.id));
    else dispatch(addCart(product));

    dispatch(addProductToCart(product.id));
  };
  return (
    <div className="lws-productCard">
      <img
        className="lws-productImage"
        src="https://i.dummyjson.com/data/products/59/thumbnail.jpg"
        alt="product"
      />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{product.name}</h4>
        <p className="lws-productCategory">{product.category}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">{product.price}</span>
          </p>
          <p className="productQuantity">
            QTY <span className="lws-quantity">{product.quantity}</span>
          </p>
        </div>
        {product.quantity > 0 ? (
          <button className="lws-btnAddToCart" onClick={addToCartHandle}>
            Add To Cart
          </button>
        ) : (
          <button
            className="lws-btnAddToCart"
            onClick={addToCartHandle}
            disabled
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
