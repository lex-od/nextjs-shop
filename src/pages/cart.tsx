import { NextPage } from "next";
import Layout from "@/components/Layout/Layout";
import Cart from "@/components/screens/Cart/Cart";

const CartPage: NextPage = () => {
  return (
    <Layout>
      <Cart />
    </Layout>
  );
};

export default CartPage;
