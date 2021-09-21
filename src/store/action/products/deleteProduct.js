export const deleteProduct = (state, action) => {
  return {
    ...state,
    products:  state.products.filter((list) => list._id !== action.payload),
  }
}