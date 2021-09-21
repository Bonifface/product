export const getOneProduct = (state, action) => {
  const {product, comments} = action.payload
  console.log(product);
  console.log(comments);
  return{
    ...state,
    product: product,
    comments: comments
  }
}