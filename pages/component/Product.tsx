import React, { Fragment } from "react";
import { IProduct } from "../redux/product/productType";

interface props {
  product: IProduct;
}

const Product = ({ product }: props) => {
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
        <button className="lws-btnAddToCart">Add To Cart</button>
      </div>
    </div>
  );
};

export default Product;
