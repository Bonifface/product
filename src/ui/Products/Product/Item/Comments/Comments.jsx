import { useStyles } from './Comments.styles';
import { Button, Card } from '@material-ui/core';
import { deleteComment } from '../../../../../store/thunk/product/deleteComment';
import { useDispatch } from 'react-redux';

export const Comments = ({ comment }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.header}>{comment.name}</div>
        <div className={classes.text}>{comment.description}</div>
        <div className={classes.footer}>
          <Button
            onClick={() => dispatch(deleteComment(comment.id, comment._id))}
            color="secondary"
          >
            Delete
          </Button>
        </div>
      </div>
    </Card>
  );
};
