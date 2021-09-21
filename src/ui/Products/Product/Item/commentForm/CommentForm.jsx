import { useStyles } from './CommentForm.styles';
import { EditTextField } from '../EditProductPopup/EditTextField/EditTextField';
import { Button, Card } from '@material-ui/core';

export const CommentForm = ({
  handleChange,
  name,
  description,
  handleSubmit,
  touchedName,
  errorsName,
  touchedDescription,
  errorsDescription,
}) => {
  const classes = useStyles();
  return (
    <Card variant="outlined" className={classes.card}>
      <EditTextField
        placeholder="Name"
        handleChange={handleChange}
        name={'name'}
        value={name}
        helperText={'Write name'}

        touched={touchedName}
        errors={errorsName}
      />
      <EditTextField
        placeholder="Comment"
        handleChange={handleChange}
        name={'description'}
        value={description}
        helperText={'Write comment'}
        touched={touchedDescription}
        errors={errorsDescription}
      />
      <div>
        <Button color="primary" onClick={() => handleSubmit()}>
          Add comment
        </Button>
      </div>
    </Card>
  );
};
