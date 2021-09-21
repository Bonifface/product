import { filterForLargeAction } from '../../../store/rootReducer';
import { filterForSmallAction } from '../../../store/rootReducer';
import { sortForNameAction } from '../../../store/rootReducer';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';

export const Filter = ({ products }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Button color="primary" onClick={() => dispatch(filterForLargeAction(products))}>
        Кількість - багато
      </Button>
      <Button color="primary" onClick={() => dispatch(filterForSmallAction(products))}>
        Кількість - мало
      </Button>
      <Button color="primary" onClick={() => dispatch(sortForNameAction(products))}>
        По назві
      </Button>
    </div>
  );
};
