export const getProducts = (state, action) => {
  return {
    ...state,
    products: action.payload,
  };
};
