import React, { useState } from 'react';
import {
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
  Select,
  MenuItem,
  TablePagination,
  Checkbox,
} from '@mui/material';
import ActionButton from 'pages/Configuration/Components/common/ActionButton';

const itemData = [
  {
    id: 1,
    itemName: 'Perri perri chicket ticka sandwitch',
    shortCode: 'salt and black peppe',
    price: 450,
  },
  {
    id: 2,
    itemName: 'Burger chicket ticka sandwitch',
    shortCode: 'Burger veg ',
    price: 350,
  },
  {
    id: 3,
    itemName: 'Salt N black chicket ticka sandwitch',
    shortCode: 'salt black',
    price: 250,
  },
  {
    id: 4,
    itemName: 'Egg fried rice',
    shortCode: 'egg',
    price: 150,
  },
  {
    id: 5,
    itemName: 'Veg tika sandwich',
    shortCode: 'sandwich',
    price: 450,
  },
  {
    id: 6,
    itemName: 'Special Pani Puri',
    shortCode: 'puri',
    price: 50,
  },
  {
    id: 7,
    itemName: 'Keema',
    shortCode: 'keema',
    price: 150,
  },

  {
    id: 8,
    itemName: 'Briyani',
    shortCode: 'Briyani',
    price: 350,
  },

  {
    id: 9,
    itemName: 'Momos',
    shortCode: 'Momo',
    price: 50,
  },
];
const ItemTable = () => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">
                <Typography variant="subtitle2"> Sr No.</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="subtitle2">Item Name</Typography>
              </TableCell>

              <TableCell align="left">
                <Typography variant="subtitle2">Short Code</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="subtitle2">Price(₹)</Typography>
              </TableCell>

              <TableCell align="left">
                <Typography variant="subtitle2">Favorite</Typography>
              </TableCell>

              <TableCell align="left">
                <Typography variant="subtitle2">Stock Status</Typography>
              </TableCell>

              <TableCell align="left">
                <Typography variant="subtitle2">Action</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {itemData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((data, index) => (
                <TableRow
                  key={data.id}
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row" align="left">
                    <Typography variant="body1">{index + 1}</Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography variant="body1">{data.itemName}</Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography variant="body1">{data.shortCode}</Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography variant="body1">{data.price}</Typography>
                  </TableCell>

                  <TableCell align="left">
                    <Checkbox sx={{ height: '10px' }} />
                  </TableCell>

                  <TableCell align="left">
                    <Select
                      name="sortBy"
                      id="sort_by"
                      sx={{ width: '100px', height: '30px' }}
                    >
                      <MenuItem value="doNotTrack">Do Not Track</MenuItem>
                      <MenuItem vlaue="outOfStock">Out of stock</MenuItem>
                      <MenuItem value="inStock">In Stock</MenuItem>
                    </Select>
                  </TableCell>

                  <TableCell align="left">
                    <ActionButton text={[{ type: 'Edit', action: 'onEdit' }]} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 2]}
          component="div"
          count={itemData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </>
  );
};

export default ItemTable;
