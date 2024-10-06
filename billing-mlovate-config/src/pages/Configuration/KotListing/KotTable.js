import {
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
} from '@mui/material';
import ActionButton from '../Components/common/ActionButton';

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
        <Table>
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
                  <ActionButton
                    text={[
                      { type: 'Save', action: 'onSave' },
                      { type: 'Print', action: 'onPrint' },
                      { type: 'Cancel', action: 'onCancel' },
                    ]}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default KotTable;
