import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Divider } from '@mui/material';

const Head = ({ children, title, click }) => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        {title}
        <Box onClick={click}>{children}</Box>
      </Box>
      <Divider />
    </>
  );
};

export default Head;
