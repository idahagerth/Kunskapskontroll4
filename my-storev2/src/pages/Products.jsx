import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue, useRecoilState } from "recoil";
import { shoppingState } from "../recoil/sneakers/Atom";
import { shoppingCart } from "../recoil/cart/Atom";
import { productDetail } from "../recoil/productPage/Atom";

function Products() {
  const shoes = useRecoilValue(shoppingState);
  const [cart, setCart] = useRecoilState(shoppingCart);
  const [viewProduct, setProduct] = useRecoilState(productDetail);

  function handleAdd(product) {
    const newCart = [...cart, product];

    setCart(newCart);
  }

  function addProductDetail(producta) {
    const selectedProduct = [viewProduct, producta];
    setProduct(selectedProduct);
  }
  console.log(shoes);
  return (
    <div className="productsPage">
      <h1 className="title">The New Collection Is Here</h1>

      <div className="mainGrid">
        <div className="shoeGrid">
          {shoes.map((shoe) => (
            <article key={shoe.id}>
              <Link
                className="navItem"
                to="/InfoProduct"
                onClick={() => addProductDetail(shoe)}
              >
                <figcaption key="{shoe.id}">{shoe.title}</figcaption>
                <img className="shoePic" key={shoe.id} src={shoe.image} />
              </Link>
              <p className="price">{shoe.price} :-</p>
              <span className="cartButton">
                <button onClick={() => handleAdd(shoe)}>Add to cart</button>
              </span>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
