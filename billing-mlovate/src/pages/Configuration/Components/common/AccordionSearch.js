import React from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import {
  SearchOutlined as SearchOutlinedIcon,
  ExpandMore as ExpandMoreIcon,
} from '@mui/icons-material';

const AccordionSearch = ({ children }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Box display="flex" alignItems="center" gap={1}>
          <SearchOutlinedIcon sx={{ fontSize: '22px', color: 'inherit' }} />
          <Typography variant="body2">Search</Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default AccordionSearch;
