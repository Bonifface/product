import { addProductAction } from '../../rootReducer';
import axios from 'axios';
import { URL } from '../config/config';

export const addProduct = (name, imageUrl, description, count, size, weight) => {
  return async (dispatch) => {
    const res = await axios.post(`${URL}/productsList`, {
      name,
      imageUrl,
      description,
      count,
      size,
      weight,
    });
    dispatch(addProductAction(res.data));
  };
};
