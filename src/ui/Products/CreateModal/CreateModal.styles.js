import {makeStyles} from '@material-ui/core';

const styles = {
  container: {
    width: 450,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    outline: 'none',
    borderRadius: 8,
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
  cancel: {
    color: 'grey',
    marginRight: 16,
  },
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export const useStyles = makeStyles(styles, { name: 'CreateModal' });