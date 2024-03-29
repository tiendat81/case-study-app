import { Box, TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  defaultValue: PropTypes.string,
};

InputField.defaultProps = {
  label: '',
  disabled: false,
  type: '',
  defaultValue: '',
};

function InputField(props) {
  const { name, label, form, disabled, type, defaultValue } = props;
  const { errors } = form;
  const errorMessage = errors?.[name]?.message;
  const hasError = !!errorMessage;

  return (
    <Box mt={1} mb={2}>
      <Controller
        name={name}
        control={form.control}
        defaultValue={defaultValue}
        render={({ value, onChange, onBlur }) => (
          <TextField
            fullWidth
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            label={label}
            disabled={disabled}
            variant="outlined"
            error={hasError}
            helperText={errorMessage}
            size="small"
          />
        )}
      />
    </Box>
  );
}

export default InputField;
