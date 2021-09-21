import { Button, Card } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStyles } from './Product.styles';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { RemoveModal } from './Item/RemoveModal/RemoveModal';

export const Product = ({ item }) => {
  const [isOpenModal, setOpenModal] = useState(false);
  const classes = useStyles();

  const openModal = () => {
    setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <div className={classes.item}>
      <Card variant="outlined">
        <div className={classes.wrapImg}>
          <img
            className={classes.img}
            src={item.imageUrl}
            alt='#'
          />
        </div>
        <div className={classes.textWrap}>
          <h4 className={classes.title}>{item.name}</h4>
          <div className={classes.text}>{item.description}</div>
          <div>Товару в наявності - {item.count}шт.</div>
        </div>
        <div className={classes.footer}>
          <Link to={`/product/${item._id}`} className={classes.link}>
            <Button color="primary" className={classes.button}>
              Деталі
            </Button>
          </Link>
          <Button color="secondary" onClick={() => openModal()}>
            Delete
          </Button>
        </div>

        {isOpenModal && (
          <RemoveModal isOpenModal={isOpenModal} closeModal={closeModal} id={item._id} />
        )}
      </Card>
    </div>
  );
};
