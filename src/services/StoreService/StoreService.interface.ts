import { AxiosPromise } from "axios";

export interface IStoreService {
  getAllProducts: (
    params?: IGetAllProductsParams
  ) => AxiosPromise<TGetAllProductsResponse>;
  getSingleProduct: (
    params: IGetSingleProductParams
  ) => AxiosPromise<TGetSingleProductResponse>;
}

// getAllProducts
export interface IGetAllProductsParams {
  offset?: number;
}
export interface IProductItem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    image: string;
  };
  images: string[];
}
export type TGetAllProductsResponse = IProductItem[];

// getSingleProduct
export interface IGetSingleProductParams {
  id: number;
}
export type TGetSingleProductResponse = IProductItem;
