import React from 'react';
import { Card, Typography } from '@mui/material';
import { AssignmentOutlined as AssignmentOutlinedIcon } from '@mui/icons-material';

const NoRecord = ({ iconSize, icon: Icon, title, titleProps, ...rest }) => {
  return (
    <Card
      {...rest}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        minHeight: '300px',
        color: '#CBCBCB',
        ...rest.sx,
      }}
    >
      <Icon sx={{ fontSize: iconSize }} />
      <Typography variant="body2" {...titleProps}>
        {title}
      </Typography>
    </Card>
  );
};

NoRecord.defaultProps = {
  iconSize: '10rem',
  title: 'Records not available',
  icon: AssignmentOutlinedIcon,
};

export default NoRecord;
