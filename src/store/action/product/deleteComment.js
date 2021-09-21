export const deleteComment = (state, action) => {
  return {
    ...state,
    comments: state.comments.filter((comment) => comment._id !== action.payload._id),
  };
};
