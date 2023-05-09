import { NextPage } from "next";
import Layout from "@/components/Layout/Layout";
import Product from "@/components/screens/Product/Product";

const ProductPage: NextPage = () => {
  return (
    <Layout>
      <Product />
    </Layout>
  );
};

export default ProductPage;
