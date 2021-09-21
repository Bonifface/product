export const filterForSmall = (state, action) => {
  return {
    ...state,
    products: [...action.payload.sort((a,b)=>a.count - b.count)]
  }
}