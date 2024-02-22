import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";

import * as Styles from "./styles";

const CartItem = ({ product }) => {
  return (
    <Styles.CartItemContainer>
      <Styles.CartItemImage imageUrl={product.imageUrl} />

      <Styles.CartItemInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>

        <Styles.CartItemQuantity>
          <AiOutlineMinus
            size={20}
            aria-label={`Decrease quantity of ${product.name}`}
          />
          <p>{product.quantity}</p>
          <AiOutlinePlus
            size={20}
            aria-label={`Increase quantity of ${product.name}`}
          />
        </Styles.CartItemQuantity>
      </Styles.CartItemInfo>

      <Styles.RemoveButton aria-label={`Remove ${product.name}`}>
        <AiOutlineClose size={25} />
      </Styles.RemoveButton>
    </Styles.CartItemContainer>
  );
};

export default CartItem;
