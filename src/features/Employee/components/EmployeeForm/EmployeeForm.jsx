import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputField from 'components/FormFields/InputField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

EmployeeForm.propTypes = {
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func,
};

EmployeeForm.defaultProps = {
  initialValues: null,
  onSubmit: null,
};

const useStyles = makeStyles({
  button: {
    textTransform: 'none',
  },
});

function EmployeeForm({ initialValues, onSubmit }) {
  const classes = useStyles();

  const schema = yup.object().shape({
    name: yup.string().required('Please enter your name.'),
    email: yup.string().email('Please enter a valid email.').required('Please enter your email.'),
    position: yup.string().required('Please enter your position.'),
  });

  const form = useForm({
    mode: 'onBlur',
    defaultValues: initialValues || {
      name: '',
      email: '',
      position: '',
    },
    resolver: yupResolver(schema),
  });

  const { isSubmitting, isValid, isValidating } = form.formState;

  const handleFormSubmit = async (values) => {
    await onSubmit?.(values);
  };

  return (
    <form noValidate autoComplete="off" onSubmit={form.handleSubmit(handleFormSubmit)}>
      <Typography component="h2" variant="h5">
        Employee Form
      </Typography>

      <InputField name="name" label="Full Name" form={form} />
      <InputField name="email" label="Email" form={form} />
      <InputField name="position" label="Position" form={form} />

      <Button
        className={classes.button}
        disabled={isSubmitting || !isValid || isValidating}
        type="submit"
        color="primary"
        variant="contained"
      >
        Create
      </Button>
    </form>
  );
}

export default EmployeeForm;
