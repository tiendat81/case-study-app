import { Box, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import FormatAlignLeftOutlinedIcon from '@material-ui/icons/FormatAlignLeftOutlined';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import PropTypes from 'prop-types';
import React from 'react';

EmployeeList.propTypes = {
  employeeList: PropTypes.array.isRequired,
};

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  heading: {
    display: 'flex',
    alignItems: 'center',
  },
});

function EmployeeList({ employeeList }) {
  const classes = useStyles();

  return (
    <Box>
      <Box mb={1}>
        <Typography variant="h5" component="h5">
          Employees
        </Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                {' '}
                <Box className={classes.heading}>
                  <TextFormatIcon fontSize="small" />
                  <Typography variant="subtitle2">Name</Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Box className={classes.heading}>
                  <AlternateEmailIcon fontSize="small" />
                  <Typography variant="subtitle2">Email</Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Box className={classes.heading}>
                  <FormatAlignLeftOutlinedIcon fontSize="small" />
                  <Typography variant="subtitle2">Position</Typography>
                </Box>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employeeList.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.position}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default EmployeeList;
