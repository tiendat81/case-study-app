import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Pagination } from '@material-ui/lab';
import PropTypes from 'prop-types';
import React from 'react';

EmployeePagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

EmployeePagination.defaultProps = {
  totalPages: 1,
  onPageChange: null,
  currentPage: null,
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function EmployeePagination({ totalPages, onPageChange, currentPage }) {
  const classes = useStyles();

  const handlePageChange = (newPage) => {
    onPageChange?.(newPage);
  };

  return (
    <Box className={classes.root}>
      <Pagination
        count={totalPages}
        page={currentPage}
        color="primary"
        onChange={(e, page) => handlePageChange(page)}
      />
    </Box>
  );
}
export default EmployeePagination;
