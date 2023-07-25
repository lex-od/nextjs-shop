import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { getIsValidImage } from "@/utils";
import noImage from "@public/images/no-image-available.jpg";
import css from "./SingleProduct.module.scss";
import { ISingleProduct } from "./SingleProduct.interfact";

const SingleProduct: FC<ISingleProduct> = ({ product }) => {
  const isImage = getIsValidImage(product.images?.[0] || "");

  return (
    <main>
      {/* <Image
        src={isImage ? product.images[0] : noImage}
        alt={product.title}
        width={320}
        height={320}
        priority
      /> */}
      <div className={css.wrapper}>
        <Image
          src={noImage}
          alt="No image"
          quality={100}
          fill
          sizes="(min-width: 769px) 400px, 200px"
        />
      </div>
      <h1>{product.title}</h1>
      <p>{product.price}</p>

      <Link href={`/`}>Back to Home</Link>
    </main>
  );
};

export default SingleProduct;
