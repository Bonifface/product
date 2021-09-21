export const sortForName = (state, action) => {
  return {
    ...state,
    products: [...action.payload.sort((a,b)=> a.name.localeCompare(b.name))]
  }
}