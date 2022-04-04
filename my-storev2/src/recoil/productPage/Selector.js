import { selector } from "recoil";
import { productDetail } from "./Atom";

export const productStatus = selector({
    key: "productStatus",
    get: ({ get }) => {
        const prodD = get(productDetail);
        return prodD;
    },
  });