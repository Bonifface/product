import { useDispatch } from 'react-redux';
import { Button, Modal, Paper } from '@material-ui/core';
import { useFormik } from 'formik';
import {productSchema} from '../../../../general/validationSchema/validationSchema';
import { editProduct } from '../../../../../store/thunk/product/editProduct';
import { useStyles } from './EditProductPupup.styles';
import { EditTextField } from './EditTextField/EditTextField';

export const EditProductPopup = ({ isOpenEditPopup, closeEditPopup, product }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      name: product.name,
      imageUrl: product.imageUrl,
      description: product.description,
      count: product.count,
      size: product.size,
      weight: product.weight,
    },
    validationSchema: productSchema,
    onSubmit: (values) => {
      dispatch(
        editProduct(
          product._id,
          values.name,
          values.imageUrl,
          values.description,
          values.count,
          values.size,
          values.weight,
        ),
      );
    },
  });

  const { values, handleChange, handleSubmit} = formik;

  return (
    <Modal open={isOpenEditPopup} onClose={closeEditPopup} className={classes.modal}>
      <Paper className={classes.container}>
        <div className={classes.wrapper}>
          <h2 className={classes.header}>Edit product</h2>
          <EditTextField
            placeholder="Name"
            handleChange={handleChange}
            name={'name'}
            value={values.name}
            helperText={"Product name"}
            touched={formik.touched.name}
            errors={formik.errors.name}
          />
          <EditTextField
            placeholder="URL"
            handleChange={handleChange}
            name={'imageUrl'}
            value={values.imageUrl}
            helperText={"Image URL"}
            touched={formik.touched.imageUrl}
            errors={formik.errors.imageUrl}
          />
          <EditTextField
            placeholder="Description"
            handleChange={handleChange}
            name={'description'}
            value={values.description}
            helperText={"Product description"}
            touched={formik.touched.description}
            errors={formik.errors.description}
          />
          <EditTextField
            placeholder="Count"
            handleChange={handleChange}
            name={'count'}
            value={values.count}
            helperText={"Product count"}
            touched={formik.touched.count}
            errors={formik.errors.count}
          />
          <EditTextField
            placeholder="Size"
            handleChange={handleChange}
            name={'size'}
            value={values.size}
            helperText={"Product size"}
            touched={formik.touched.size}
            errors={formik.errors.size}
          />
          <EditTextField
            placeholder="Weight"
            handleChange={handleChange}
            name={'weight'}
            value={values.weight}
            helperText={"Product weight"}
            touched={formik.touched.weight}
            errors={formik.errors.weight}
          />
          <div className={classes.footer}>
            <Button color="primary" onClick={() => handleSubmit()}>Edit</Button>
            <Button className={classes.cancel} onClick={() => closeEditPopup()}>Close</Button>
          </div>
        </div>
      </Paper>
    </Modal>
  );
};