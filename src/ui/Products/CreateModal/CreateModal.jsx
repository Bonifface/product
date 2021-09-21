import { Button, Modal, Paper } from '@material-ui/core';
import { EditTextField } from '../Product/Item/EditProductPopup/EditTextField/EditTextField';
import { useFormik } from 'formik';
import { productSchema } from '../../general/validationSchema/validationSchema';
import { addProduct } from '../../../store/thunk/products/addProduct';
import { useDispatch } from 'react-redux';
import { useStyles } from './CreateModal.styles';

export const CreateModal = ({ isOpenCreateModal, closeCreateModal }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      name: '',
      imageUrl: '',
      description: '',
      count: '',
      size: '',
      weight: '',
    },
    validationSchema: productSchema,
    onSubmit: (values, ) => {
      dispatch(
        addProduct(
          values.name,
          values.imageUrl,
          values.description,
          values.count,
          values.size,
          values.weight,
        ),
      );
      closeCreateModal();
    },
  });

  const { values, handleChange, handleSubmit } = formik;
  return (
    <Modal open={isOpenCreateModal} onClose={closeCreateModal} className={classes.modal}>
      <Paper className={classes.container}>
        <div className={classes.wrapper}>
          <h2 className={classes.header}>Create product</h2>
          <EditTextField
            placeholder="Name"
            handleChange={handleChange}
            name={'name'}
            value={values.name}
            helperText={'Product name'}
            touched={formik.touched.name}
            errors={formik.errors.name}
          />
          <EditTextField
            placeholder="URL"
            handleChange={handleChange}
            name={'imageUrl'}
            value={values.imageUrl}
            helperText={'Image URL'}
            touched={formik.touched.imageUrl}
            errors={formik.errors.imageUrl}
          />
          <EditTextField
            placeholder="Description"
            handleChange={handleChange}
            name={'description'}
            value={values.description}
            helperText={'Product description'}
            touched={formik.touched.description}
            errors={formik.errors.description}
          />
          <EditTextField
            placeholder="Count"
            handleChange={handleChange}
            name={'count'}
            value={values.count}
            helperText={'Product count'}
            touched={formik.touched.count}
            errors={formik.errors.count}
          />
          <EditTextField
            placeholder="Size"
            handleChange={handleChange}
            name={'size'}
            value={values.size}
            helperText={'Product size'}
            touched={formik.touched.size}
            errors={formik.errors.size}
          />
          <EditTextField
            placeholder="Weight"
            handleChange={handleChange}
            name={'weight'}
            value={values.weight}
            helperText={'Product weight'}
            touched={formik.touched.weight}
            errors={formik.errors.weight}
          />
          <div className={classes.footer}>
            <Button color="primary" onClick={() => handleSubmit()}>
              Add
            </Button>
            <Button className={classes.cancel} onClick={() => closeCreateModal()}>
              Close
            </Button>
          </div>
        </div>
      </Paper>
    </Modal>
  );
};
