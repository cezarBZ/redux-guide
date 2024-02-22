import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";
// import { loginUser, logoutUser } from "../../redux/user/actions";
// import { selectProductsCount } from "../../redux/cart/cart.selectors";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  // const handleLoginClick = () => {
  //   dispatch(loginUser({ name: "Celza", email: "celza@email.com" }));
  // };

  // const handleLogoutClick = () => {
  //   dispatch(logoutUser());
  // };
  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        <div onClick={handleCartClick}>Carrinho ({0})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
