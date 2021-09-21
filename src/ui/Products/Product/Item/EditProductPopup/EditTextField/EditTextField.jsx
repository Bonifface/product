import { TextField } from '../../../../../general/TextField/TextField';
import { useStyles } from './EditTextField.styles';

export const EditTextField = ({
  placeholder,
  handleChange,
  name,
  value,
  helperText,
  touched,
  errors,
}) => {
  const classes = useStyles();
  return (
    <TextField
      handleChange={handleChange}
      name={name}
      variant={'outlined'}
      placeholder={placeholder}
      value={value}
      fullWidth
      helperText={touched ? errors : helperText}
      className={classes.textField}
      error={touched}
      InputProps={{
        classes: {
          root: classes.textFieldInputRoot,
          notchedOutline: classes.textFieldInputNotchedOutline,
        },
      }}
    />
  );
};
