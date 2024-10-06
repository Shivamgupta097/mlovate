import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Box, Typography, Stack, Button } from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';

const PageHeader = ({
  wrapperComponent: Wrapper = Card,
  title,
  startComponent,
  spacing = 1,
  children,
  backBtn,
  ...rest
}) => {
  const navigate = useNavigate();
  return (
    <Wrapper {...rest} sx={{ position: 'relative', ...rest.sx }}>
      <Box display="flex" justifyContent="space-between">
        {startComponent ? (
          startComponent
        ) : (
          <Box display="flex" alignItems="center">
            <Typography variant="body2" fontWeight={600}>
              {title}
            </Typography>
          </Box>
        )}
        <Stack spacing={spacing} direction="row" alignItems="center">
          {children}
          {backBtn && (
            <Button
              variant="outlined"
              onClick={() => navigate(-1)}
              startIcon={<ArrowBackIcon />}
            >
              Back
            </Button>
          )}
        </Stack>
      </Box>
    </Wrapper>
  );
};

export default PageHeader;
