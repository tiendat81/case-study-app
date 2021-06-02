import { Box, Button, Container, Dialog, DialogContent } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import employeeApi from 'api/employeeApi';
import Loading from 'components/Loading';
import React, { useEffect, useState } from 'react';
import EmployeeForm from './components/EmployeeForm/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import EmployeePagination from './components/Pagination';

const ITEM_PER_PAGE = 5;

function Employee() {
  const [employeeList, setEmployeeList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedEmployee] = useState(null);
  const [loadEmployee, setLoadEmployee] = useState(false);
  const totalPages = Math.ceil(employeeList?.length / ITEM_PER_PAGE);
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState({
    page: 1,
    limit: 5,
  });

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await employeeApi.getAll();
        setEmployeeList(data);
        setLoading(false);
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
    setLoadEmployee(true);
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
      {loading ? (
        <Loading />
      ) : (
        <Box>
          <Box mt={3}>
            <EmployeeList employeeList={currentEmployees} />
          </Box>
          <Button color="primary" startIcon={<Add />} onClick={handleAddClick}>
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
    </Container>
  );
}

export default Employee;
