import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { IProductItemProps } from "./ProductItem.interface";
import css from "./ProductItem.module.scss";

const ProductItem: FC<IProductItemProps> = ({ product }) => {
  return (
    <li>
      {product.images[0] && (
        <Image src={product.images[0]} alt={product.title} />
      )}
      <h2>{product.title}</h2>
      <small>{product.price}</small>

      <Link href={`/product/${product.id}`}>Details</Link>
    </li>
  );
};

export default ProductItem;
