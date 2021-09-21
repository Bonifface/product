import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from './Products.styles';
import { Product } from './Product/Product';
import { Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { getProducts } from '../../store/thunk/products/getProducts';
import { CreateModal } from './CreateModal/CreateModal';
import { Filter } from './Filter/Filter';

export const Products = () => {
  const [isOpenCreateModal, setOpenCreateModal] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const classes = useStyles();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const openCreateModal = () => {
    setOpenCreateModal(true);
  };
  const closeCreateModal = () => {
    setOpenCreateModal(false);
  };

  return (
    <div className={classes.products}>
      <div className={classes.container}>
        <Filter products={products} />

      </div>

      <div className={classes.container}>
        {products.map((el) => (
          <Product key={el._id} item={el} />
        ))}
        <div className={classes.addBtn}>
          <Button color="primary" onClick={() => openCreateModal()}>Add product</Button>
        </div>
      </div>

      {isOpenCreateModal && (
        <CreateModal isOpenCreateModal={isOpenCreateModal} closeCreateModal={closeCreateModal} />
      )}
    </div>
  );
};
