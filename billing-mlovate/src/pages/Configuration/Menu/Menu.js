import React from 'react';
import { Card, Stack } from '@mui/material';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import ConfigTable from '../Components/ConfigTable';
import { PageHeader } from 'components/common/Header';

const MenuConfig = () => {
  return (
    <Stack spacing={3}>
      <PageHeader title="Billing User Profile" backBtn />
      <Card>
        <Stack direction="row" spacing={3}>
          {[
            {
              title: 'Item Management',
              IconName: ManageSearchOutlinedIcon,
              key: 'item management',
              link: '/configuration/menu/item-management',
            },
            {
              title: 'Special Notes Manangement',
              IconName: DescriptionOutlinedIcon,
              key: 'specialnotesmanangement',
              link: '/configuration/menu/special-notes-management',
            },
            {
              title: 'Area Management',
              IconName: CompareArrowsOutlinedIcon,
              key: 'areamanagement',
              link: '/configuration/menu/area-management',
            },
          ].map(item => {
            return <ConfigTable item={item} key={item.key} />;
          })}
        </Stack>
      </Card>
    </Stack>
  );
};

export default MenuConfig;
