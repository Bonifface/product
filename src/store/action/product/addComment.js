export const addComment = (state, action) => {
  return {
    ...state,
    comments: [...action.payload]
  }
}