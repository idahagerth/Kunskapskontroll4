import React from "react";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { shoppingStatus, deleteItem } from "../recoil/cart/Selector";
import { shoppingCart } from "../recoil/cart/Atom";

function Cart() {
  const [cart] = useRecoilState(shoppingCart);
  const { totalPrice } = useRecoilValue(shoppingStatus);
  const removeItem = useSetRecoilState(deleteItem);

  return (
    <div>
      {cart.map((item, index) => (
        <div className="shoeCart">
          <div className="titlePrice">
            <p className="shoeTitle">{item.title} </p>
            <p>{item.price} :-</p>
          </div>
          <img className="bigPic" src={item.image} />
          <button className="radera" onClick={() => removeItem(index)}>
            Remove
          </button>
        </div>
      ))}
      <div className="sideBar">
        <div className="total">
          <p>Shipping: 0:-</p>
          <p>Total: {totalPrice}:-</p>
        </div>
        <button className="checkout">Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
