import { NextPage } from "next";
import Layout from "@/components/Layout/Layout";
import Cart from "@/components/screens/Cart/Cart";
import Meta from "@/components/seo/Meta/Meta";

const CartPage: NextPage = () => {
  return (
    <Meta title="Cart" description="Cart description">
      <Layout>
        <Cart />
      </Layout>
    </Meta>
  );
};

export default CartPage;
