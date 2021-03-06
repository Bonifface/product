import { makeStyles } from '@material-ui/core';

const styles = {
  container: {
    width: 700,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    outline: 'none',
    borderRadius: 8,
    margin: 10
  },
  wrapper: {
    width: 'calc(100% - 32px)',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    margin: '30px 0 30px 10px',
    color: 'rgba(0, 0, 0, 0.87)',
    fontWeight: 900,
  },
  footer: {
    height: 70,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: {
    color: 'rgba(0, 0, 0, 0.6)',
    margin: '0 10px 0 10px',
    fontWeight: 500,
  },
  btnWrapper: {
    margin: 15,
    minWidth: "3px",
    textDecoration:"none",
    border: "none",
  },
}

export const useStyles = makeStyles(styles, "Comments")