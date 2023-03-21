import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { IProduct } from "../redux/product/productType";
import { createProduct } from "../redux/product/productAction";

const productProperty: IProduct = {
  name: "",
  category: "",
  url: "",
  price: 0,
  quantity: 0,
};

const AddProduct = () => {
  const [product, setProduct] = useState<IProduct>(productProperty);
  const dispatch = useDispatch();

  const productHandle = (e: React.FormEvent<HTMLInputElement>) => {
    setProduct({ ...product, [e.currentTarget.name]: e.currentTarget.value });
  };

  const formSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(createProduct(product));
    setProduct(productProperty);
  };

  return (
    <div className="formContainer">
      <h4 className="formTitle">Add New Product</h4>
      <form
        className="space-y-4 text-[#534F4F]"
        id="lws-addProductForm"
        onSubmit={formSubmitHandler}
      >
        <div className="space-y-2">
          <label htmlFor="lws-inputName">Product Name</label>
          <input
            className="addProductInput"
            id="lws-inputName"
            type="text"
            required
            name="name"
            onChange={productHandle}
            value={product.name}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="lws-inputCategory">Category</label>
          <input
            className="addProductInput"
            id="lws-inputCategory"
            type="text"
            required
            name="category"
            value={product.category}
            onChange={productHandle}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="lws-inputImage">Image Url</label>
          <input
            className="addProductInput"
            id="lws-inputImage"
            type="text"
            required
            name="url"
            value={product.url}
            onChange={productHandle}
          />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="ws-inputPrice">Price</label>
            <input
              className="addProductInput"
              type="number"
              id="lws-inputPrice"
              required
              name="price"
              value={product.price}
              pattern="[0-9]*"
              onChange={productHandle}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="lws-inputQuantity">Quantity</label>
            <input
              className="addProductInput"
              type="number"
              id="lws-inputQuantity"
              required
              name="quantity"
              value={product.quantity}
              onChange={productHandle}
            />
          </div>
        </div>
        <button type="submit" id="lws-inputSubmit" className="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
