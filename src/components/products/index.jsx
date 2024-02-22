import products from "../../data/products";
import ProductItem from "../product-item/index";
import * as Styles from "./styles";

const Products = () => {
  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Styles.Container>
        {products.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </Styles.Container>
    </div>
  );
};

export default Products;
