export const editProduct =(state, action) => {
  return {
    ...state,
    product: action.payload
  }
}