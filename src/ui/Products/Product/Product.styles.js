import { makeStyles } from '@material-ui/core';

const styles = {
  item: {
    width: 300,
    margin: 5,
  },
  wrapImg: {
    padding: 8
  },
  textWrap: {
    height: 120,
    margin: '10px',
  },
  img: {
    width: 299,
    height: 245,
    maxWidth: '100%',
    maxHeight: '100%',
  },
  title: {
    height: 30,
    size: 16,
    margin: '10px',
  },
  text: {
    height: '80px',
    overflow: 'hidden',
    columnWidth: '200px',
    // margin: '5px',
  },
  link: {
    textDecoration: 'none',
  },
  button: {
    margin: 10,
  },
  footer: {
    paddingTop: 20,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
};

export const useStyles = makeStyles(styles, 'Product');
