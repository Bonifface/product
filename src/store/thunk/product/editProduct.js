import axios from 'axios';
import { URL } from '../config/config';
import { editProductAction } from '../../rootReducer';

export const editProduct = (id, name, imageUrl, description, count, size, weight) => {
  return async (dispatch) => {
    const res = await axios.put(`${URL}/product/:id`, {
      id,
      name,
      imageUrl,
      description,
      count,
      size,
      weight,
    });
    console.log(res.data);
    dispatch(editProductAction(res.data))
  };
};
