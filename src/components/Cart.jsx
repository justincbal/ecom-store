import { useEffect, useState } from "react";
import CartCard from "./CartCard";
import "../css/Cart.css";

const Cart = (prop) => {
  const handleClose = () => {
    const cart = document.querySelector(".cartArea");
    cart.classList.add("cartComeOut");
    cart.classList.remove("cartComeIn");
  };

  let total = 0;
  for (let i = 0; i < prop.cart.length; i++) {
    total += prop.cart[i].price;
  }

  const cartItems = prop.cart.map((items) => (
    <CartCard info={items} key={items.id} />
  ));

  return (
    <>
      <div className="cartArea cartComeOut">
        <div className="cartButtons">
          <button className="cButton" type="button" onClick={handleClose}>
            Close
          </button>
          <button className="cButton" type="button">
            Cart ({prop.cartSize})
          </button>
        </div>
        <div className="cartItems">{cartItems}</div>
        <div className="cartTotalCheck">
          <h3 className="total">Subtotal {total.toPrecision(5)}</h3>
          <button className="checkoutButton">Checkout</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
