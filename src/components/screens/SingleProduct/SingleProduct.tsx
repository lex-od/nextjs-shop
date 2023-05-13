import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { getIsValidImage } from "@/utils";
import css from "./SingleProduct.module.scss";
import { ISingleProduct } from "./SingleProduct.interfact";

const SingleProduct: FC<ISingleProduct> = ({ product }) => {
  const isImage = getIsValidImage(product.images?.[0] || "");

  return (
    <main>
      <Image
        src={isImage ? product.images[0] : "/no-image-available.jpg"}
        alt={product.title}
        width={480}
        height={480}
      />
      <h1>{product.title}</h1>
      <p>{product.price}</p>

      <Link href={`/`}>Back to Home</Link>
    </main>
  );
};

export default SingleProduct;
