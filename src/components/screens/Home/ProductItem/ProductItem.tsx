import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { getIsValidImage } from "@/utils";
import { IProductItemProps } from "./ProductItem.interface";
import css from "./ProductItem.module.scss";

const ProductItem: FC<IProductItemProps> = ({ product }) => {
  const isImage = getIsValidImage(product.images?.[0] || "");

  return (
    <li>
      <Link className={css.detailsLink} href={`/product/${product.id}`}>
        <Image
          src={isImage ? product.images[0] : "/no-image-available.jpg"}
          alt={product.title}
          width={240}
          height={240}
        />
        <h2>{product.title}</h2>
        <p>{product.price}</p>
      </Link>
    </li>
  );
};

export default ProductItem;
