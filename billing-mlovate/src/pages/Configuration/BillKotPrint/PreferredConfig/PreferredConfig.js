import React from 'react';
import {
  Box,
  Typography,
  Divider,
  Button,
  Checkbox,
  Radio,
  TextField,
} from '@mui/material';
import { PageHeader } from 'components/common/Header';

const PreferredConfig = () => {
  const [selectedValue, setSelectedValue] = React.useState(
    'individual items price will be shown (without backward tax) on printed Bill',
  );

  const handleChange = event => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <Box>
        <PageHeader title="Bill/KOT Preferred Configuration" backBtn />
        <Divider />
        <Box
          mt={2}
          sx={{
            backgroundColor: 'white',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            border="0.5px solid black"
            display="flex"
            justifyContent="flex-start"
            pl={4}
            sx={{ width: '70%' }}
            mt={2}
          >
            <Box width="94%">
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Checkbox defaultChecked />
                <Typography>
                  Print KOT On Print Bill (Only first time, not in edit).
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Checkbox defaultChecked />
                <Typography>Consider Non-Prepared KOT in Bill.</Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Checkbox defaultChecked />
                <Typography>Print only Modified KOT.</Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Checkbox />
                <Typography>Print only Modified items in KOT.</Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Checkbox />
                <Typography>Print Deleted Items in KOT.</Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Checkbox />
                <Typography>Print Deleted items in Seperate KOT.</Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Checkbox />
                <Typography>Print Cancelled KOT.</Typography>
              </Box>

              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Checkbox />
                <Typography>Print KOT No. on Bill as (Token No.)</Typography>
              </Box>

              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Checkbox />
                <Typography>
                  Print CWT (Category Wise Tax) bifurcation on Bill.
                </Typography>
              </Box>

              <Box display="flex" alignItems="center">
                <Radio
                  checked={
                    selectedValue ===
                    'individual items price will be shown (without backward tax) on printed Bill'
                  }
                  onChange={handleChange}
                  value="individual items price will be shown (without backward tax) on printed Bill"
                  name="radio-buttons"
                  inputProps={{
                    'aria-label':
                      'individual items price will be shown (without backward tax) on printed Bill',
                  }}
                />
                <Typography>
                  Individual items price will be shown (without backward tax) on
                  printed Bill
                </Typography>
              </Box>

              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Radio
                  checked={
                    selectedValue ===
                    'individual items price will be shown (including backward tax) on printed Bill'
                  }
                  onChange={handleChange}
                  value="individual items price will be shown (including backward tax) on printed Bill"
                  name="radio-buttons"
                  inputProps={{
                    'aria-label':
                      'individual items price will be shown (including backward tax) on printed Bill',
                  }}
                />
                <Typography>
                  Individual items price will be shown (including backward tax)
                  on printed Bill
                </Typography>
              </Box>

              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Checkbox defaultChecked />
                <Typography>Show backward Tax on Printed bill.</Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Checkbox defaultChecked />
                <Typography>
                  Show Duplicate on a bill if its printed Multiple Time.
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Checkbox defaultChecked />
                <Typography>
                  Show Duplicate on a KOT if its printed Multiple Time.
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Checkbox />
                <Typography>
                  Show `Customer Paid` and `Return to Customer`` On Bill
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Checkbox />
                <Typography>
                  Show Special Notes/addOn below item row in kot. (only for
                  general printer)
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Checkbox defaultChecked />
                <Typography>Show addOn in bill print.</Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
                gap={7}
              >
                <Typography variant={'body2'}>
                  EveryDay reset KOT no from
                </Typography>
                <TextField
                  size="small"
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                />
              </Box>
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Checkbox />
                <Typography>
                  Printed BarCode on KOT to mark food Ready OR Pickup Order by
                  DE.
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Checkbox />
                <Typography>
                  Printed BarCode on Bill to mark food Ready OR Pickup Order by
                  DE.
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Checkbox />
                <Typography>Assign Bill Sales to KOT Purched user.</Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Checkbox defaultChecked />
                <Typography>
                  Print while moving one table to another table
                  (table/kot/items).
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Checkbox defaultChecked />
                <Typography>Print Kot from Captain APP.</Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Checkbox defaultChecked />
                <Typography>
                  Display errors while checking printer status.
                </Typography>
              </Box>
              <Divider />
              <Box display="flex" justifyContent="flex-end" mt={3} mb={2}>
                <Button variant="contained">Save</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PreferredConfig;
