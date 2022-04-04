import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { productStatus } from "../recoil/productPage/Selector";
import { shoppingCart } from "../recoil/cart/Atom";

function InfoProduct() {
  const boots = useRecoilValue(productStatus);

  const [cart, setCart] = useRecoilState(shoppingCart);

  function Add(product) {
    const newCart = [...cart, product];
    setCart(newCart);
  }

  return (
    <div>
      {boots.map((boot) => (
        <div className="productSideBar" key={boot.id}>
          <div>
            <p className="title1">{boot.title}</p>
            <p className="title2">{boot.description}</p>
            <p className="title3">{boot.price}:-</p>
            <button className="title4" onClick={() => Add(boot)}>
              Add to cart
            </button>
          </div>

          <img className="infoPic" src={boot.image} />
        </div>
      ))}
    </div>
  );
}

export default InfoProduct;
