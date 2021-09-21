import axios from 'axios';
import { getOneProductAction } from '../../rootReducer';
import { URL } from '../config/config';

export const getOneProduct = (id) => {
  return async (dispatch) => {
    const res = await axios.get(`${URL}/product/${id}`)
    dispatch(getOneProductAction(res.data))
  }
}
