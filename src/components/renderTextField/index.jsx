import React from 'react';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

export default function RenderTextField(props) {
  const {
    field: {
      value,
      onChange,
      onBlur,
    },
    label,
    helperText,
    style,
    placeholder,
    fullWidth,
    error,
    className,
    variant,
    color,
    disabled,
    type,
    id,
    autocomplete,
    required,
    maxLength,
  } = props;

  return (
    <TextField
      error={error}
      required={required}
      disabled={disabled}
      label={label}
      variant={variant}
      color={color}
      helperText={helperText}
      onBlur={onBlur}
      onChange={onChange}
      placeholder={placeholder}
      value={value || ''}
      inputProps={{
        style,
        maxLength,
      }}
      fullWidth={fullWidth}
      className={className}
      type={type}
      id={id}
      autoComplete={autocomplete} />
  );
}

RenderTextField.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.string,
  }),
  error: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Object),
  ]),
  style: PropTypes.shape({}),
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  autocomplete: PropTypes.string,
  maxLength: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

RenderTextField.defaultProps = {
  error: false,
  required: false,
  disabled: false,
  label: '',
  style: {},
  fullWidth: true,
  placeholder: '',
  helperText: '',
  variant: 'standard',
  color: 'primary',
  className: '',
  type: 'text',
  id: '',
  maxLength: '',
  autocomplete: '',
  field: { name: '', onBlur: () => {}, onChange: () => {}, value: '' },
};
