import React from 'react';
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from '@mui/material';
import Accordian from '../AccordianManagement';
import { PageHeader } from 'components/common/Header';

function createData(name, table) {
  return { name, table };
}

const rows = [createData('Zomato', 1), createData('ISwiggy', 2)];

const TableView = () => {
  return (
    <Box mt={4} style={{ height: '400px' }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Table</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

const AreaManagement = () => {
  return (
    <>
      <PageHeader title="Area Listing" backBtn />
      <Accordian>
        <Grid container gap={4}>
          <Grid items md={2}>
            <Typography variant="h6">Name</Typography>
            <TextField id="outlined-basic" variant="outlined" size="small" />
          </Grid>
        </Grid>
        <Grid items md={7}>
          <Button variant="contained">Click</Button>
          <Button variant="outlined">Cick</Button>
        </Grid>
      </Accordian>
      <TableView />
    </>
  );
};

export default AreaManagement;
