import axios from "axios";
import { IStoreService } from "./StoreService.interface";

axios.defaults.baseURL = process.env.STORE_SERVICE_URL;

export const StoreService: IStoreService = {
  getAllProducts({ offset = 0 } = {}) {
    return axios.get("/v1/products", { params: { limit: 20, offset } });
  },
  getSingleProduct({ id }) {
    return axios.get(`/v1/products/${id}`);
  },
};
