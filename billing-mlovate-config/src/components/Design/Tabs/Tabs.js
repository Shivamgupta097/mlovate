import React from 'react';
import MuiTabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const Tabs = ({
  tabs = [],
  value,
  onChange,
  children,
  wrapperProps = {},
  ...rest
}) => {
  return (
    <Box
      display="flex"
      {...wrapperProps}
      sx={{
        width: '100%',
        borderBottom: 1,
        borderColor: 'divider',
        ...wrapperProps.sx,
      }}
    >
      <MuiTabs value={value} onChange={onChange} {...rest}>
        {children}
        {tabs.map(({ label, ...tabsRest }, i) => {
          return <Tab key={i} label={label} {...tabsRest} />;
        })}
      </MuiTabs>
    </Box>
  );
};

export default Tabs;
