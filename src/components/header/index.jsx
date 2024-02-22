import { useState } from "react";
import { useSelector } from "react-redux";
import Cart from "../cart/index";
import * as Styles from "./styles";
import { selectProductsCount } from "../../redux/cart/cart.selectors";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const productsCount = useSelector((rootReducer) => selectProductsCount(rootReducer));

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  return (
    <>
    
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        <div onClick={handleCartClick}>Carrinho ({productsCount})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
    </>
  );
}

export default Header;
