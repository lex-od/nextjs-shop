import { NextPage } from "next";
import Layout from "@/components/Layout/Layout";
import Product from "@/components/screens/Product/Product";
import Meta from "@/components/seo/Meta/Meta";

const ProductPage: NextPage = () => {
  return (
    <Meta title="Product name" description="Product description">
      <Layout>
        <Product />
      </Layout>
    </Meta>
  );
};

export default ProductPage;
