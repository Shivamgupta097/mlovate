import React from 'react';
import {
  Box,
  Typography,
  TextField,
  TextareaAutosize,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Divider,
  Button,
  Stack,
} from '@mui/material';
import Form from '../Common/PageLayout';
import { PageHeader } from 'components/common/Header';

const ResetBillNo = () => {
  return (
    <Stack spacing={3}>
      <PageHeader title="Reset Bill No." backBtn />
      <Form display="flex" columnSpacing={3}>
        <Box
          display="flex"
          alignItems="center"
          sx={{ m: 2 }}
          justifyContent="space-evenly"
        >
          <Box width="200px">
            <Typography variant="body1">Password</Typography>
          </Box>
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            sx={{ width: '458px' }}
          />
        </Box>
        <Box
          display="flex"
          alignItems="center"
          sx={{ m: 2 }}
          justifyContent="space-evenly"
        >
          <Box width="200px">
            <Typography variant="body1">Reset</Typography>
          </Box>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={4}
            style={{ width: 450 }}
          />
        </Box>
        <Box
          display="flex"
          alignItems="center"
          sx={{ m: 2 }}
          justifyContent="space-evenly"
        >
          <Box width="200px">
            <Typography variant="body1">Reset Bill No.</Typography>
          </Box>
          <FormControl sx={{ marginLeft: '11px', width: 450 }}>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="None"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="Yearly"
                control={<Radio />}
                label="Yearly"
              />
              <FormControlLabel
                value="Monthly"
                control={<Radio />}
                label="Monthly"
              />
              <FormControlLabel
                value="Weekly"
                control={<Radio />}
                label="Weekly"
              />
              <FormControlLabel
                value="Daily"
                control={<Radio />}
                label="Daily"
              />
              <FormControlLabel value="None" control={<Radio />} label="None" />
            </RadioGroup>
          </FormControl>
        </Box>
        <Divider />
        <Box display="flex" justifyContent="flex-end" mt={2} mb={1} mr={3}>
          <Button variant="contained">Save</Button>
        </Box>
      </Form>
    </Stack>
  );
};

export default ResetBillNo;
