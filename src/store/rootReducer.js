import { deleteProduct } from './action/products/deleteProduct';
import { filterForSmall } from './action/sortProducts/filterForSmall';
import { filterForLarge } from './action/sortProducts/filterForLarge';
import { sortForName } from './action/sortProducts/sortForName';
import { getProducts } from './action/products/getProducts';
import { addProduct } from './action/products/addProduct';
import { getOneProduct } from './action/product/getOneProduct';
import { editProduct } from './action/product/editProduct';
import { addComment } from './action/product/addComment';
import { deleteComment } from './action/product/deleteComment';

const initialState = {
  products: [],
  product: [],
  comments: [],
};
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const FILTER_FOR_SMALL = 'FILTER_FOR_SMALL';
const FILTER_FOR_LARGE = 'FILTER_FOR_LARGE';
const SORT_FOR_NAME = 'SORT_FOR_NAME';
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';
const GET_ONE_PRODUCT = 'GET_ONE_PRODUCT';
const EDIT_PRODUCT = 'EDIT_PRODUCT';
const ADD_COMMENT = 'ADD_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PRODUCT:
      return deleteProduct(state, action);
    case FILTER_FOR_SMALL:
      return filterForSmall(state, action);
    case FILTER_FOR_LARGE:
      return filterForLarge(state, action);
    case SORT_FOR_NAME:
      return sortForName(state, action);
    case GET_PRODUCTS:
      return getProducts(state, action);
    case ADD_PRODUCT:
      return addProduct(state, action);
    case GET_ONE_PRODUCT:
      return getOneProduct(state, action);
    case EDIT_PRODUCT:
      return editProduct(state, action);
    case ADD_COMMENT:
      return addComment(state, action);
    case DELETE_COMMENT:
      return deleteComment(state, action);
    default:
      return state;
  }
};

export const deleteProductAction = (payload) => {
  return { type: DELETE_PRODUCT, payload };
};
export const filterForLargeAction = (payload) => {
  return { type: FILTER_FOR_LARGE, payload };
};
export const filterForSmallAction = (payload) => {
  return { type: FILTER_FOR_SMALL, payload };
};
export const sortForNameAction = (payload) => {
  return { type: SORT_FOR_NAME, payload };
};
export const getProductsAction = (payload) => {
  return { type: GET_PRODUCTS, payload };
};
export const addProductAction = (payload) => {
  return { type: ADD_PRODUCT, payload };
};
export const getOneProductAction = (payload) => {
  return { type: GET_ONE_PRODUCT, payload };
};
export const editProductAction = (payload) => {
  return { type: EDIT_PRODUCT, payload };
};
export const addCommentAction = (payload) => {
  return { type: ADD_COMMENT, payload };
};
export const deleteCommentAction = (payload) => {
  return {type: DELETE_COMMENT , payload}
}
