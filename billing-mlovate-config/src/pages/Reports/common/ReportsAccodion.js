import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Typography,
  Divider,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Input from 'components/Design/Input';

const useStyle = makeStyles({
  accordionStyle: {
    width: '250px',
  },
});

const ReportsAccodion = () => {
  const classes = useStyle();
  const [accordion1, setAccodion1] = useState(false);
  const [accordion2, setAccodion2] = useState(false);
  const [value, setValue] = React.useState(
    new Date('2018-01-01T00:00:00.000Z'),
  );
  const [state, setStateHook] = useState({});
  const setState = old => setStateHook(oldState => ({ ...oldState, ...old }));

  const handleFontSizeChange = e => {
    return setState({ [e.target.name]: e.target.value });
  };

  const handleAccodion1 = () => {
    setAccodion2(false);
    setAccodion1(!accordion1);
  };

  const handleAccodion2 = () => {
    setAccodion1(false);
    setAccodion2(!accordion2);
  };

  return (
    <>
      <Accordion expanded={accordion1} onChange={handleAccodion1}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.accordionStyle}
        >
          <Button variant="outlined" sx={{ width: '190px' }}>
            <SearchIcon />
            Search
          </Button>
        </AccordionSummary>
        <AccordionDetails>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Box display="flex" gap={10} justifyContent="center">
              <Box>
                <Typography variant="body1" fontWeight="bold" mb={1}>
                  From
                </Typography>
                <DateTimePicker
                  renderInput={props => (
                    <TextField
                      size="small"
                      sx={{ width: '220px' }}
                      {...props}
                    />
                  )}
                  value={value}
                  onChange={newValue => {
                    setValue(newValue);
                  }}
                />
              </Box>
              <Box>
                <Typography variant="body1" fontWeight="bold" mb={1}>
                  To
                </Typography>
                <DateTimePicker
                  renderInput={props => (
                    <TextField
                      size="small"
                      sx={{ width: '220px' }}
                      {...props}
                    />
                  )}
                  value={value}
                  onChange={newValue => {
                    setValue(newValue);
                  }}
                />
              </Box>
            </Box>
          </LocalizationProvider>
          <Divider />
          <Box mt={2} display="flex" justifyContent="flex-end" pr={4} gap={3}>
            <Button variant="outlined" startIcon={<LanguageIcon />}>
              Search from Web
            </Button>
            <Button variant="contained">Search</Button>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={accordion2} onChange={handleAccodion2}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className={classes.accordionStyle}
        >
          <Button variant="outlined">
            <SettingsOutlinedIcon />
            Print Configuration
          </Button>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Box>
              <FormControl sx={{ marginLeft: '11px' }}>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label-r10"
                  defaultValue="None"
                  name="row-radio-buttons-group-r10"
                >
                  <Box display="flex">
                    <FormControlLabel
                      value="Show Bill Header"
                      control={<Radio />}
                      label="Show Bill Header"
                    />
                    <FormControlLabel
                      value="Show Bill Footer"
                      control={<Radio />}
                      label="Show Bill Footer"
                    />
                    <FormControlLabel
                      value="None"
                      control={<Radio />}
                      label="None"
                    />
                  </Box>
                </RadioGroup>
              </FormControl>
            </Box>
            <Box display="flex">
              <Box display="flex" alignItems="center">
                <Checkbox />
                <Typography variant="body1" display="flex">
                  Display &nbsp;
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    to Date
                  </Typography>{' '}
                  &nbsp; on Print
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Checkbox />
                <Typography variant="body1" display="flex">
                  Display &nbsp;
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    Time
                  </Typography>{' '}
                  &nbsp; on Print
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Checkbox />
                <Typography variant="body1" display="flex">
                  Display &nbsp;
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    Summary Box
                  </Typography>{' '}
                  &nbsp; on Print
                </Typography>
              </Box>
            </Box>
            <Box sx={{ width: '40%' }} display="flex" gap={3}>
              <Box sx={{ width: '60%' }}>
                <Input label="Max Width" />
              </Box>
              <Box sx={{ width: '60%' }}>
                <Input
                  label="Font Size"
                  name="fontSize"
                  value={state.fontSize}
                  options={[
                    {
                      label: '8',
                      value: 8,
                    },
                    {
                      label: '9',
                      value: 9,
                    },
                    {
                      label: '10',
                      value: 10,
                    },
                    {
                      label: '11',
                      value: 11,
                    },
                    {
                      label: '12',
                      value: 12,
                    },
                    {
                      label: '13',
                      value: 13,
                    },
                    {
                      label: '14',
                      value: 14,
                    },
                    {
                      label: '15',
                      value: 15,
                    },
                  ]}
                  onChange={handleFontSizeChange}
                />
              </Box>
            </Box>
            <Box mt={2}>
              <Divider />
            </Box>
            <Box
              sx={{
                marginTop: '20px',
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <Button variant="contained">Save</Button>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default ReportsAccodion;
