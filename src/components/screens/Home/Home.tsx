import css from "./Home.module.scss";
import { StoreService } from "@/services/StoreService";

const Home = () => {
  return (
    <main
      onClick={() => {
        StoreService.getSingleProduct({ id: 23 });
        // StoreService.getAllProducts();
      }}
    >
      Home
    </main>
  );
};

export default Home;
