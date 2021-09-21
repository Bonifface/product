import { URL } from '../config/config';
import {deleteProductAction} from '../../rootReducer';
import axios from 'axios';

export const deleteProduct = (id) => {
  return async (dispatch) => {
    const res = await axios.delete(`${URL}/productsList/${id}`);
    console.log(res.data);
    dispatch(deleteProductAction(res.data))
  };
};
