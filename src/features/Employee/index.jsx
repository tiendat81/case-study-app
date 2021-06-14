import { Box, Button, Container, Dialog, DialogContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Add } from '@material-ui/icons';
import employeeApi from 'api/employeeApi';
import Loading from 'components/Loading';
import React, { lazy, Suspense, useEffect, useState } from 'react';

const EmployeeForm = lazy(() => import('./components/EmployeeForm/EmployeeForm'));
const EmployeeList = lazy(() => import('./components/EmployeeList'));
const EmployeePagination = lazy(() => import('./components/Pagination'));

const ITEMS_PER_PAGE = 5;

const useStyles = makeStyles({
  button: {
    textTransform: 'none',
  },
});

function Employee() {
  const classes = useStyles();

  const [employeeList, setEmployeeList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedEmployee] = useState(null);
  const [loadEmployee, setLoadEmployee] = useState(false);
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState({
    page: 1,
    limit: ITEMS_PER_PAGE,
  });

  const totalPages = Math.ceil(employeeList?.length / ITEMS_PER_PAGE);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await employeeApi.getAll();
        setEmployeeList(data);
        setLoading(false);
        setLoadEmployee(true);
      } catch (error) {
        console.log('Failed to fetch employee list', error);
      }
    })();
  }, [loadEmployee]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddClick = () => setOpen(true);

  const handleSubmit = async (values) => {
    await employeeApi.add(values);
    setLoadEmployee(false);
    setOpen(false);
  };

  const handlePageChange = (newPage) => {
    setFilters({
      ...filters,
      page: newPage,
    });
  };

  const indexOfLastEmployee = filters.page * filters.limit;
  const indexOfFirstEmployee = indexOfLastEmployee - filters.limit;
  const currentEmployees = employeeList.slice(indexOfFirstEmployee, indexOfLastEmployee);

  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        {loading ? (
          <Loading />
        ) : (
          <Box>
            <Box mt={3}>
              <EmployeeList employeeList={currentEmployees} />
            </Box>
            <Button
              className={classes.button}
              color="primary"
              startIcon={<Add />}
              onClick={handleAddClick}
            >
              New
            </Button>

            <Dialog fullWidth open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
              <DialogContent>
                <EmployeeForm initialValues={selectedEmployee} onSubmit={handleSubmit} />
              </DialogContent>
            </Dialog>

            <Box display="flex" justifyContent="center">
              <EmployeePagination
                totalPages={totalPages}
                currentPage={filters.page}
                onPageChange={handlePageChange}
              />
            </Box>
          </Box>
        )}
      </Suspense>
    </Container>
  );
}

export default Employee;
