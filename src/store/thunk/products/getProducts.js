import { getProductsAction } from '../../rootReducer';
import axios from 'axios';
import { URL } from '../config/config';

export const getProducts = () => {
  return async (dispatch) => {
    const res = await axios.get(`${URL}/productsList`);
    dispatch(getProductsAction(res.data));
  };
};
