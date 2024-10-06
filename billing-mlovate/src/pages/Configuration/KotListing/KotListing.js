import React from 'react';
import {
  Box,
  Stack,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
  InputLabel,
  TextField,
  Select,
  MenuItem,
  Grid,
  Button,
} from '@mui/material';
import { PageHeader } from 'components/common/Header';
import { ColorIndicator } from 'components/common';
import AccordionSearch from '../Components/common/AccordionSearch';
import ButtonListing from '../Components/common/ButtonListing';

const KotData = [
  {
    kotNo: 1,
    orderType: 'Dine In',
    tableNo: 'T1',
    customerNumber: 8293893231,
    customerName: 'Utsav',
    itemNo: 3,
    status: 'Not Prepared',
    createdDate: '2022-06-10',
    createdTime: '18:32:00',
  },
  {
    kotNo: 3,
    orderType: 'Dine In',
    tableNo: 'T2',
    customerNumber: 8293893631,
    customerName: 'Utsav',
    itemNo: 4,
    status: 'Not Prepared',
    createdDate: '2022-07-10',
    createdTime: '18:32:00',
  },
  {
    kotNo: 4,
    orderType: 'Dine In',
    tableNo: 'T4',
    customerNumber: 82773893231,
    customerName: 'Mahendar',
    itemNo: 7,
    status: 'Not Prepared',
    createdDate: '2022-06-10',
    createdTime: '18:32:00',
  },
];

const KotTable = () => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle2"> KOT No.</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="subtitle2">Order Type</Typography>
              </TableCell>

              <TableCell align="left">
                <Typography variant="subtitle2">Table No</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="subtitle2">Customer Phone</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="subtitle2">Customer Name</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="subtitle2">No. Of item</Typography>
              </TableCell>

              <TableCell>Status</TableCell>
              <TableCell align="left">
                <Typography variant="subtitle2">Created</Typography>
                On
              </TableCell>
              <TableCell align="left">
                <Typography variant="subtitle2">Bill Print Date</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="subtitle2">Complete Duration</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="subtitle2">Action</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {KotData.map(data => (
              <TableRow key={data.kotNo}>
                <TableCell component="th" scope="row" align="left">
                  <Typography variant="body1">{data.kotNo}</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="body1">{data.orderType}</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="body1">{data.tableNo}</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="body1">{data.customerNumber}</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="body1">{data.customerName}</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="body1">{data.itemNo}</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="body1">{data.status}</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="body1">{data.createdDate}</Typography>
                </TableCell>
                <TableCell align="left">---</TableCell>

                <TableCell align="left">---</TableCell>
                <TableCell align="left">
                  <Stack direction="row" spacing={2}>
                    <Button color="primary" variant="outlined" size="small">
                      View
                    </Button>
                    <Button color="primary" variant="outlined" size="small">
                      Print
                    </Button>
                    <Button color="primary" variant="outlined" size="small">
                      Cancel
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

const KotListing = () => {
  return (
    <Box>
      <Stack spacing={3}>
        <PageHeader title="KOT Listing" backBtn />

        <AccordionSearch>
          <Grid container component="form" spacing={3}>
            <Grid item md={2}>
              <InputLabel htmlFor="kot_no">KOT No.</InputLabel>
              <TextField
                id="kot_no"
                name="kot_no"
                placeholder="Enter your username"
                size="small"
              />
            </Grid>

            <Grid item md={2}>
              <InputLabel htmlFor="table_no">Table No.</InputLabel>
              <TextField
                id="table_no"
                name="table_no"
                placeholder="Enter table no"
                size="small"
              />
            </Grid>

            <Grid item md={2}>
              <InputLabel htmlFor="customer_name">Customer Name</InputLabel>
              <TextField
                id="customer_name"
                name="customer_name"
                placeholder="Enter customer name"
                size="small"
              />
            </Grid>
            <Grid item md={2}>
              <InputLabel htmlFor="mobile_no">Mobile</InputLabel>
              <TextField
                id="mobile_no"
                name="mobile_no"
                placeholder="Enter mobile number"
                size="small"
              />
            </Grid>
            <Grid item md={2}>
              <InputLabel htmlFor="order_type">Order Type</InputLabel>
              <Select
                name="order_type"
                id="order_type"
                sx={{ width: '200px' }}
                size="small"
                defaultValue="all"
              >
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="dineIn">Dine In</MenuItem>
                <MenuItem value="delivery">Delivery</MenuItem>
                <MenuItem value="pickUp">Pick Up</MenuItem>
              </Select>
            </Grid>

            <Grid item md={2}>
              <InputLabel htmlFor="kot_status">KOT status</InputLabel>
              <Select
                name="kot_status"
                id="kot_status"
                sx={{ width: '200px' }}
                size="small"
                defaultValue="usedInBill"
              >
                <MenuItem value="cancelled">Cancelled</MenuItem>
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="usedInBill">Used in Bill</MenuItem>
              </Select>
            </Grid>
            <ButtonListing listingBtn />
          </Grid>
        </AccordionSearch>

        <Box display="flex" justifyContent="end">
          <ColorIndicator
            items={[
              { title: 'Used in Bill', color: 'white' },
              { title: 'Active', color: 'green' },
              { title: 'Cancelled', color: 'orange' },
              { title: 'Not Prepared', color: 'blue' },
              { title: 'Prepairing', color: 'yellow' },
            ]}
          />
        </Box>

        <KotTable />
      </Stack>
    </Box>
  );
};

export default KotListing;
