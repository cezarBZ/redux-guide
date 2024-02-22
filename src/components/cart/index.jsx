/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import CartItem from "../cart-item/index";
import { selectProductsTotalPrice } from "../../redux/cart/cart.selectors";
import * as Styles from "./styles";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const { products } = useSelector((rootReducer) => rootReducer.cart);
  const cartTotalPrice = useSelector(selectProductsTotalPrice);

  return (
    <Styles.CartContainer isvisible={isVisible ? 'true' : 'false'}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        {products.length > 0 ? (
          <>
            <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>

            {products.map((product, index) => (
              <CartItem product={product} key={index} />
            ))}

            <Styles.CartTotal>
              Valor total: R$ {cartTotalPrice}
            </Styles.CartTotal>
          </>
        ) : (
          <Styles.CartEmptyMessage>
            Seu carrinho está vazio
          </Styles.CartEmptyMessage>
        )}
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
