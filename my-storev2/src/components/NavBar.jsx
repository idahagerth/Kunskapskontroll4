import React from "react";
import { Link } from "react-router-dom";
import { Box, Stack } from "@chakra-ui/react";
import { RiShoppingBasketLine } from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import { shoppingStatus } from "../recoil/cart/Selector";
import { useRecoilValue } from "recoil";

function NavBar() {
  const { totalItems } = useRecoilValue(shoppingStatus);

  return (
    <Box>
      <Stack>
        <h2 className="code">
          Up to 25% off Selected Orders, Free worldwide shipping
        </h2>

        <div className="text">
          <h1 className="navHeader">Designer Clothes & Sneakers Warehouse</h1>

          <div className="navLinks">
            <Link className="navItem" to="/">
              Home
            </Link>
            <Link className="navItem" to="/Products">
              Products
            </Link>
            <div className="hej">
              <Link to="/Login">
                <BiUser />
              </Link>
              <Link to="/Cart">
                <RiShoppingBasketLine />
              </Link>
              <p className="number">{totalItems}</p>
            </div>
          </div>
        </div>
      </Stack>
    </Box>
  );
}

export default NavBar;
