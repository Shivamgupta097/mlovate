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

export const dineInMode = [
  { iconName: TableRestaurantOutlinedIcon, title: 'Table', key: 'table' },
  userInfo,
  { iconName: GroupsOutlinedIcon, title: 'No. of People', key: 'group' },
  comment,
];
export const deliveryMode = [userInfo, comment];

export const pickUpMode = [userInfo, comment];
