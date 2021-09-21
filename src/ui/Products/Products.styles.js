import { makeStyles } from '@material-ui/core';

const styles = {
  products: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 27
  },
  productsWrapper: {

  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  addBtn: {
    padding: "100px 0 0 110px"
  }
};

export const useStyles = makeStyles(styles, 'Products');
