import { makeStyles } from '@material-ui/core';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 10,
    padding: '15px 100px 15px 100px',
  },
  aboutProduct: {
    display: 'flex',
  },
  productWrapper: {
    display: 'flex',
    width: 800,
  },
  img: {
    paddingTop: 40,
    paddingBottom: 40,
    maxHeight: 400,
  },
  title: {
    paddingLeft: 40,
    margin: '30px 0 30px 10px',
    color: 'rgba(0, 0, 0, 0.87)',
    fontWeight: 900,
  },
  description: {
    color: 'rgba(0, 0, 0, 0.6)',
    margin: '0 10px 0 10px',
    fontWeight: 500,
    paddingLeft: 40,
  },
  parameter: {
    margin: '15px 0 15px 10px',
    color: 'rgba(0, 0, 0, 0.87)',
    paddingLeft: 40,
    fontWeight: 900,
    fontSize: 15,
  },
  editBtn: {
    height: 70,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
};

export const useStyles = makeStyles(styles, { name: 'Item' });
