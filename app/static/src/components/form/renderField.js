import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox';
import React from 'react'
export const renderTextField = ({input, label, meta: {touched, error}, ...custom}) => (
  <TextField
      hintText={label}
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      {...custom}
  />
);

export const renderPasswordField = ({input, label, meta: {touched, error}, ...custom}) => (
    <TextField
        type="password"
        hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        {...custom}
    />
);

export const renderCheckbox = ({input, label}) => (
    <Checkbox
        label={label}
        checked={input.value ? true : false}
        onCheck={input.onChange}
    />
);
