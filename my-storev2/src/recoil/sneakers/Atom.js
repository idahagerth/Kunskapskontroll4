import { atom } from "recoil";

export const shopping = async () => {
  const response = await fetch("https://k4backend.osuka.dev/products");
  return await response.json();
};

export const shoppingState = atom({
  key: "shoppingState",
  default: shopping(),
});
