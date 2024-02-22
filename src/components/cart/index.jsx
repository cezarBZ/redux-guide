/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import CartItem from "../cart-item/index";
// Styles
import * as Styles from "./styles"
import products from "../../data/products";
// import { selectProductsTotalPrice } from "../../redux/cart/cart.selectors";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  // const { products } = useSelector((rootReducer) => rootReducer.cartReducer);
  // const totalPrice = useSelector(selectProductsTotalPrice);

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>

        {products.map((product, index) => (
          <CartItem product={product} key={index} />
        ))}
        <Styles.CartTotal>{0}</Styles.CartTotal>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
