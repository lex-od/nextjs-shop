import { FC } from "react";
import { StoreService } from "@/services/StoreService";
import css from "./Home.module.scss";
import { IHome } from "./Home.interface";
import ProductItem from "./ProductItem/ProductItem";

const Home: FC<IHome> = ({ products }) => {
  return (
    <main
      onClick={() => {
        StoreService.getSingleProduct({ id: 23 });
        // StoreService.getAllProducts();
      }}
    >
      <h1>Welcome to Next.js Shop</h1>

      {!products.length && <b>Products not found</b>}

      {!!products.length && (
        <ul>
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ul>
      )}
    </main>
  );
};

export default Home;
