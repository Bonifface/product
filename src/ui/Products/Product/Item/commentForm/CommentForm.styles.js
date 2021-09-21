import { makeStyles } from '@material-ui/core';

const styles ={
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    padding: 15,
    width: 670
  }
}
export const useStyles = makeStyles(styles, { name: 'CommentForm' });