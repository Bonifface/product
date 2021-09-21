import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import { getOneProduct } from '../../../../store/thunk/product/getOneProduct';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import {commentSchema} from '../../../general/validationSchema/validationSchema';
import { EditProductPopup } from './EditProductPopup/EditProductPopup';
import { Comments } from './Comments/Comments';
import { addComment } from '../../../../store/thunk/product/addComment';
import { useStyles } from './Item.styles';
import { CommentForm } from './commentForm/CommentForm';




export const Item = () => {
  const [isOpenEditPopup, setOpenEditPopup] = useState(false);

  const product = useSelector((state) => state.product);
  const comments = useSelector((state) => state.comments);

  const dispatch = useDispatch();
  const { id } = useParams();
  const classes = useStyles();

  const openEditPopup = () => {
    setOpenEditPopup(true);
  };
  const closeEditPopup = () => {
    setOpenEditPopup(false);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
    },
    validationSchema: commentSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(addComment(product._id, values.description, values.name));
      resetForm();
    },
  });
  const { values, handleChange, handleSubmit} = formik;
  useEffect(() => {
    dispatch(getOneProduct(id));
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.aboutProduct}>
        <img className={classes.img} src={product.imageUrl} alt="#" />
        <div className={classes.productWrapper}>
          <div>
            <h3 className={classes.title}>{product.name}</h3>
            <div className={classes.description}>{product.description}</div>
            <div className={classes.parameter}>Кількість {product.count}</div>
            <div className={classes.parameter}>Розмір {product.size}</div>
            <div className={classes.parameter}>Вага {product.weight}</div>
          </div>
          <div className={classes.editBtn}>
            <Button color="primary" onClick={() => openEditPopup()}>
              Edit Product
            </Button>
          </div>
        </div>
      </div>
      <CommentForm
        handleChange={handleChange}
        name={values.name}
        description={values.description}
        handleSubmit={handleSubmit}
        touchedName={formik.touched.name}
        errorsName={formik.errors.name}
        touchedDescription={formik.touched.description}
        errorsDescription={formik.errors.description}
      />
      {comments.map((el) => (
        <Comments key={el._id} comment={el} />
      ))}
      {isOpenEditPopup && (
        <EditProductPopup
          isOpenEditPopup={isOpenEditPopup}
          openEditPopup={openEditPopup}
          closeEditPopup={closeEditPopup}
          product={product}
        />
      )}
    </div>
  );
};
