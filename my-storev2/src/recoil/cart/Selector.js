import { selector } from "recoil";
import { shoppingCart } from "./Atom";

export const shoppingStatus = selector({
  key: "shoppingStatus",
  get: ({ get }) => {
    const shopping = get(shoppingCart);

    const totalItems = shopping.length;
    const totalPrice = shopping.reduce((total, current) => {
      const thePrice = parseInt(current.price);

      return total + thePrice;
    }, 0);
    return {
      totalItems,
      totalPrice,
    };
  },
});

export const deleteItem = selector({
  key: "deleteItem",
  get: () => {},
  set: ({ get, set }, itemIndex) => {
    const shopping = get(shoppingCart);
    let newCart = [...shopping];
    newCart.splice(itemIndex, 1);
    set(shoppingCart, newCart);
  },
});
