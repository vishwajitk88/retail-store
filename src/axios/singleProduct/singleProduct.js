import axios from "axios";
import { single_product_url } from "../../utils/links";

const fetchSingleProduct = axios.create({
  baseURL: single_product_url,
});
export default fetchSingleProduct;
