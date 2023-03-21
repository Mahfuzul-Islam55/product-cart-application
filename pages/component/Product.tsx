import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { IInitialState } from "../redux/product/productType";
import { addCart } from "../redux/cart/cartAction";
import { addProductToCart } from "../redux/product/productAction";
interface props {
  product: IInitialState;
}

const Product = ({ product }: props) => {
  const dispatch = useDispatch();
  const addToCartHandle = () => {
    dispatch(addProductToCart(product.id));
    dispatch(addCart(product));
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
