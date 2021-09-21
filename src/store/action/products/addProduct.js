export const addProduct = (state, action) => {
  return {
    ...state,
    products: [...state.products, action.payload]
  }
}