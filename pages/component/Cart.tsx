import Head from "next/head";
import Link from "next/link";
import React from "react";
import BillDetails from "./BillDetails";
import ShoppingCartList from "./ShoppingCartList";

const Cart = () => {
  return (
    <div>
      <main className="py-16">
        <div className="container 2xl:px-8 px-2 mx-auto">
          <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
          <div className="cartListContainer">
            <div className="space-y-6">
              <ShoppingCartList />
            </div>
            <BillDetails />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
