import React from 'react';
import TextField from '@material-ui/core/TextField';

function TextFieldComponent({
  id,
  label,
  name,
  value,
  floatingLabelText,
  // fullWidth,
  handleTextChange
}) {
  return (
    <TextField
      id={id}
      label={label}
      name={name}
      value={value}
      floatingLabelText={floatingLabelText}
      // fullWidth={fullWidth}
      onChange={handleTextChange}
    />
  );
}

export default TextFieldComponent;
