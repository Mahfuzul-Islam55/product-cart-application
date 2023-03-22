import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { IInitialStateCart } from "../redux/cart/InitialStateCart";
import { IRootState } from "../redux/stateType";

const Navbar = () => {
  const allCartProduct: any = useSelector((state: IRootState) => state.count);
  if (allCartProduct.length > 0) {
    var totalCartItem = allCartProduct.reduce((prev: any, cart: any) => {
      return prev.quantity + cart.quantity;
    });
  }

  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <a href="index.html">
          <img
            src="./images/logo.png"
            alt="Shopping Cart Application"
            className="max-w-[140px]"
          />
        </a>

        <div className="flex gap-4">
          <Link href="/">
            <h3 className="navHome" id="lws-home">
              {" "}
              Home{" "}
            </h3>
          </Link>

          <Link href="/component/Cart" className="navCart" id="lws-cart">
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">
              {allCartProduct.cartNumber > 0 ? allCartProduct.cartNumber : 0}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
