import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { IProduct } from "../redux/product/productType";
import { IRootState } from "../redux/stateType";
import Product from "./Product";

const ProductList = () => {
  const allProduct: any = useSelector((state: IRootState) => state.product);
  return (
    <Fragment>
      <div className="productContainer" id="lws-productContainer">
        {allProduct.length === 0 ? (
          <h3 style={{ display: "flex", justifyContent: "center" }}>
            There is no product added yet.
          </h3>
        ) : (
          allProduct.map((product: IProduct) => (
            <Product product={product} key={product.id} />
          ))
        )}
      </div>
    </Fragment>
  );
};

export default ProductList;
