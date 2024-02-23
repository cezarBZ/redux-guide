import { useState } from "react";
import { useSelector } from "react-redux";
import Cart from "../cart/index";
import * as Styles from "./styles";
import { selectProductsCount } from "../../redux/cart/cart.selectors";
import { HiOutlineShoppingCart } from "react-icons/hi";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const productsCount = useSelector((rootReducer) =>
    selectProductsCount(rootReducer)
  );

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  return (
    <Styles.Container>
      <Styles.Logo>
        Minha<span>Lojinha</span>
      </Styles.Logo>
      <Styles.Buttons>
        <HiOutlineShoppingCart onClick={handleCartClick} />
        <Styles.CartCount>{productsCount}</Styles.CartCount>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
