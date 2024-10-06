import { useState } from 'react';
import {
  Box,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  useTheme,
  Typography,
} from '@mui/material';
import OpenCloseIcon from './OpenCloseIcon';
import ExpandedView from './ExpandedView';

const FormControlElement = ({ isCheckBox, ...rest }) => {
  const Component = isCheckBox ? Checkbox : Radio;
  return (
    <FormControlLabel
      componentsProps={{
        typography: { fontWeight: 400, variant: 'body1', color: '#fff' },
      }}
      control={
        <Component
          sx={{ color: '#fff', '&, &.Mui-checked': { color: '#fff' } }}
        />
      }
      {...rest}
    />
  );
};

const BillingUpDrawer = ({ totalPrice, totalQuantity }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const ctnrClr = theme.palette.primary.dark;
  return (
    <Box position="relative">
      {/* Expand component */}
      <>
        {!open && (
          <Box>
            <OpenCloseIcon
              open={open}
              onClick={() => setOpen(old => !old)}
              sx={{ background: ctnrClr, marginTop: '-15px' }}
            />
          </Box>
        )}
        <Box
          sx={{
            zIndex: 1,
            width: '100%',
            position: 'absolute',
            marginTop: open ? 'calc(-60vh + 50px)' : 0,
            background: '#3d3d3d',
            height: open ? 'calc(60vh - 50px)' : 0,
            borderTopLeftRadius: theme.spacing(2),
            borderTopRightRadius: theme.spacing(2),
            transition: 'all 0.2s ease-out',
          }}
        >
          {open && (
            <OpenCloseIcon
              open={open}
              onClick={() => setOpen(old => !old)}
              sx={{ background: ctnrClr }}
            />
          )}
          <Box
            height="100%"
            p={2}
            sx={{
              borderTopLeftRadius: theme.spacing(2),
              borderTopRightRadius: theme.spacing(2),
              overflow: 'auto',
            }}
          >
            <ExpandedView
              totalPrice={totalPrice}
              totalQuantity={totalQuantity}
            />
          </Box>
        </Box>
      </>
      {/* End of Expand component */}

      <Box
        sx={{
          mb: 2,
          width: '100%',
          minHeight: '0px',
          overflow: 'hidden',
          background: ctnrClr,
        }}
      >
        <Box display="flex" justifyContent="end" px={2} pt={2}>
          <Box
            display="flex"
            sx={{
              gap: 1,
              justifyContent: 'center',
              alignItems: 'baseline',
              color: '#fff',
            }}
          >
            <Typography variant="body1" color="#FBFF00" fontWeight={600}>
              Total
            </Typography>
            <Typography variant="h5"> {totalPrice}</Typography>
          </Box>
        </Box>

        <Box
          mt={2}
          sx={{
            backgroundColor: theme.palette.primary.light,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <FormControl>
            <RadioGroup row onChange={() => {}}>
              <FormControlElement value="cash" label="Cash" />
              <FormControlElement value="card" label="Card" />
              <FormControlElement value="other" label="Other" />
              <FormControlElement value="part" label="Part" />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <FormControlElement isCheckBox label="Paid" />
        </Box>
      </Box>
    </Box>
  );
};

export default BillingUpDrawer;
