import {
  TableRestaurantOutlined as TableRestaurantOutlinedIcon,
  PersonOutlineOutlined as PersonOutlineOutlinedIcon,
  GroupsOutlined as GroupsOutlinedIcon,
  AddCommentOutlined as AddCommentOutlinedIcon,
} from '@mui/icons-material';

const comment = {
  iconName: AddCommentOutlinedIcon,
  title: 'Comment',
  key: 'comment',
};

const userInfo = {
  iconName: PersonOutlineOutlinedIcon,
  title: 'User information',
  key: 'userInformation',
};

export const orderMode = {
  dineIn: {
    mode: [
      { iconName: TableRestaurantOutlinedIcon, title: 'Table', key: 'table' },
      userInfo,
      { iconName: GroupsOutlinedIcon, title: 'No. of People', key: 'group' },
      comment,
    ],
    action: 'DineIn',
  },
  delivery: { mode: [userInfo, comment], action: 'Delivery' },
  pickUp: { mode: [userInfo, comment], action: 'Pickup' },
};
