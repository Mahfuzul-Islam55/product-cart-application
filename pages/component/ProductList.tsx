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
        {allProduct.map((product: IProduct) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </Fragment>
  );
};

export default ProductList;
