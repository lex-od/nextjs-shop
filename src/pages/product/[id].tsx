import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import Layout from "@/components/Layout/Layout";
import SingleProduct from "@/components/screens/SingleProduct/SingleProduct";
import Meta from "@/components/seo/Meta/Meta";
import { StoreService } from "@/services/StoreService";
import { ISingleProduct } from "@/components/screens/SingleProduct/SingleProduct.interfact";

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  // Pre-render only the first page (20 products)
  const { data } = await StoreService.getAllProducts();

  const paths = data.map(({ id }) => {
    return { params: { id: String(id) } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<ISingleProduct, Params> = async ({
  params,
}) => {
  console.log(params);
  const { data } = await StoreService.getSingleProduct({
    id: params?.id as string,
  });

  return {
    props: { product: data },
    revalidate: 30,
  };
};

const SingleProductPage: NextPage<ISingleProduct> = ({ product }) => {
  return (
    <Meta title={product.title} description={product.description}>
      <Layout>
        <SingleProduct product={product} />
      </Layout>
    </Meta>
  );
};

export default SingleProductPage;
