import axios from 'axios';
import { URL } from '../config/config';
import { addCommentAction } from '../../rootReducer';

export const addComment = (id, description, name) => {
  return async (dispatch) => {
    const res = await axios.post(`${URL}/product/${id}`, {
      id,
      name: name,
      description: description,
      date: new Date(),
    });
    console.log(res.data);
    dispatch(addCommentAction(res.data));
  };
};
