import React from 'react';
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';

import {
  AddOutlined as AddOutlinedIcon,
  RemoveOutlined as RemoveOutlinedIcon,
  DeleteOutlined as DeleteOutlinedIcon,
} from '@mui/icons-material';

export default function OrderTable({
  orderItemList,
  onHandleDeleteItem,
  handleIncrement,
  handleDecrement,
  inputHandler,
  value,
  setValue,
}) {
  return (
    <TableContainer
      sx={{
        height: '300px',
        overflow: 'auto',
      }}
    >
      <Table aria-label="simple table">
        {/* Header */}
        <TableHead sx={{ backgroundColor: '#ff55' }}>
          <TableRow color="primary">
            <TableCell align="left">
              <Typography variant="subtitle2">ITEMS</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="subtitle2">QTY</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="subtitle2"> PRICE</Typography>
            </TableCell>
          </TableRow>
        </TableHead>

        {/* Body */}
        <TableBody>
          {orderItemList.map((item, index) => (
            <TableRow key={item.menuId}>
              <TableCell align="left" display="flex">
                <IconButton
                  size="small"
                  color="primary"
                  onClick={() => onHandleDeleteItem(item)}
                >
                  <DeleteOutlinedIcon />
                </IconButton>
                <Typography variant="subtitle2" component="span">
                  {item.title}
                </Typography>
              </TableCell>

              <TableCell align="center">
                <IconButton
                  size="small"
                  color="primary"
                  onClick={() => handleDecrement(item)}
                >
                  <RemoveOutlinedIcon />
                </IconButton>

                <TextField
                  type="text"
                  value={item.quantity}
                  onChange={event => inputHandler(event, item)}
                  sx={{ width: '60px', marginX: '4px' }}
                  size="small"
                  placeholder="1"
                />
                <IconButton
                  size="small"
                  color="primary"
                  onClick={() => handleIncrement(item)}
                >
                  <AddOutlinedIcon />
                </IconButton>
              </TableCell>
              <TableCell align="center">
                <Typography mb={1} variant="subtitle1" color="primary">
                  {item.total * item.quantity}
                </Typography>
                <Typography mb={1} variant="subtitle2">
                  {item.total}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
