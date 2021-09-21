export const filterForLarge = (state, action) => {
  return {
    ...state,
    products: [...action.payload.sort((a, b) => b.count - a.count)]
  }
}