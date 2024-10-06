import React from 'react';
import { Box, Button } from '@mui/material';

const ButtonListing = ({
  listingBtn,
  detailsBtn,
  setRenderNumber,
  handleSubmit,
}) => {
  return (
    <>
      {listingBtn && (
        <Box mt={2} display="flex" justifyContent="space-between" gap={3}>
          <Box></Box>
          <Box display="flex" gap={2}>
            <Button variant="outlined">Reset</Button>
            <Button variant="contained">Search</Button>
          </Box>
        </Box>
      )}

      {detailsBtn && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          m={2}
        >
          <Box>
            <Button
              variant="outlined"
              // onClick={() => setRenderNumber(prev => prev + 1)}
              onClick={handleSubmit}
            >
              Add more
            </Button>
          </Box>

          <Box display="flex" gap={2}>
            <Button variant="outlined">Cancel</Button>
            <Button variant="contained">Save</Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default ButtonListing;
