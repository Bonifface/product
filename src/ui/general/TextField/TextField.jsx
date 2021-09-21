import { TextField as FieldText } from '@material-ui/core';

export const TextField = ({
  placeholder,
  className,
  InputProps,
  helperText,
  handleChange,
  value,
  name,
  error,
  variant,
  fullWidth,
}) => {
  return (
    <FieldText
      name={name}
      onChange={handleChange}
      value={value}
      className={className}
      placeholder={placeholder}
      variant={variant}
      InputProps={InputProps}
      fullWidth={fullWidth}
      helperText={helperText}
      error={error}
    />
  );
};
