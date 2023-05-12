import { NextPage } from "next";
import Layout from "@/components/Layout/Layout";
import SingleProduct from "@/components/screens/SingleProduct/SingleProduct";
import Meta from "@/components/seo/Meta/Meta";

const SingleProductPage: NextPage = () => {
  return (
    <Meta title="Product name" description="Product description">
      <Layout>
        <SingleProduct />
      </Layout>
    </Meta>
  );
};

export default SingleProductPage;
