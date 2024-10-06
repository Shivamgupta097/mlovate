import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ToggleOnTwoToneIcon from '@mui/icons-material/ToggleOnTwoTone';
import SummarizeTwoToneIcon from '@mui/icons-material/SummarizeTwoTone';
import LiveTvSharpIcon from '@mui/icons-material/LiveTvSharp';
import CalendarViewDayOutlinedIcon from '@mui/icons-material/CalendarViewDayOutlined';
import UpgradeOutlinedIcon from '@mui/icons-material/UpgradeOutlined';

export const sidebarMenuItems = [
  {
    key: 'billing',
    title: 'Billing',
    icon: CurrencyRupeeIcon,
    subitem: [],
    to: '/',
  },
  {
    key: 'configuration',
    title: 'Configuration',
    icon: ToggleOnTwoToneIcon,
    subitem: [],
    to: '/configuration',
  },
  {
    key: 'repots',
    title: 'Reports',
    icon: SummarizeTwoToneIcon,
    subitem: [
      {
        title: 'Category Summary',
      },
      { title: 'Item Summary' },
      { title: 'Sales Summary' },
      { title: 'Order Summary' },
      { title: 'Executive Sales Summary' },
      { title: 'Employee Sales Summary' },
      { title: 'Group Summary' },
      { title: 'Cover Size Summary' },
      { title: 'Tip Summary' },
      { title: 'Locality Wise Summary' },
      { title: 'Captain Wise Summary' },
      { title: 'Settlement Summary' },
      { title: 'NC Item Summary' },
    ],
    to: '',
  },
  {
    key: 'liveview',
    title: 'Live View',
    icon: LiveTvSharpIcon,
    subitem: [],
    to: '',
  },
  {
    key: 'dayend',
    title: 'Day End',
    icon: CalendarViewDayOutlinedIcon,
    subitem: [],
    to: '',
  },
  {
    key: 'checkforupdates',
    title: 'Check for Updates',
    icon: UpgradeOutlinedIcon,
    subitem: [],
    to: '',
  },
];
