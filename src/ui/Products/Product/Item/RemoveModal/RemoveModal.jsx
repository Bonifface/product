import { Button, Modal, Paper } from '@material-ui/core';
import { useStyles } from './RemoveModal.styles';
import { deleteProduct } from '../../../../../store/thunk/products/deleteProduct';
import { useDispatch } from 'react-redux';

export const RemoveModal = ({ isOpenModal, closeModal, id }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <Modal open={isOpenModal} onClose={closeModal} className={classes.modal}>
      <Paper className={classes.container}>
        <div className={classes.wrapper}>
          <h2 className={classes.header}>Remove product</h2>
          <div className={classes.footer}>
            <Button color="secondary" onClick={() => dispatch(deleteProduct(id))}>
              Remove
            </Button>
            <Button color="primary" onClick={() => closeModal()}>
              Close
            </Button>
          </div>
        </div>
      </Paper>
    </Modal>
  );
};
