import { Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';
import { config } from 'theme';
import { tableStatusColor } from '../utils/constants';

const TableButton = styled(Button)(props => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '90px',
  minWidth: '90px',
  position: 'relative',
  borderRadius: '10px',
  boxShadow: 'none',
  cursor: 'pointer',
  textDecoration: 'none',
  color: '#000000',
  border: `1px solid ${
    tableStatusColor[props.status] || tableStatusColor.blank
  }`,
  background: alpha(
    tableStatusColor[props.status] || tableStatusColor.blank,
    0.6,
  ),
  '&:hover': {
    boxShadow: config.boxShadow1,
    background: alpha(
      tableStatusColor[props.status] || tableStatusColor.blank,
      1,
    ),
  },
}));

const BookingTable = ({ title, status = 'blank', ...rest }) => {
  return (
    <TableButton {...rest} status={status}>
      <Typography variant="body2" fontWeight={600}>
        {title}
      </Typography>
    </TableButton>
  );
};

export default BookingTable;
