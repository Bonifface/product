import axios from 'axios';
import { URL } from '../config/config';
import {deleteCommentAction} from '../../rootReducer';

export const deleteComment = (listId, id) => {
  return async (dispatch) =>{
    const res = await axios.delete(`${URL}/product/${id}`, {
      listId
    })
    dispatch(deleteCommentAction(res.data))
  }
}