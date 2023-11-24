
import axios from 'axios'
import {products_url} from '../../utils/links'

const fetchProducts = axios.create({
    baseURL: products_url,
  });
export default fetchProducts