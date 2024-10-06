import { TextField, Select } from '@mui/material';

const selector = ({ component: comp }) => {
  if (comp && typeof comp !== 'string') return comp;
  let Component = TextField;
  switch (comp) {
    case 'text':
      Component = TextField;
      break;
    case 'select':
      Component = Select;
      break;
    default:
      break;
  }
  return Component;
};

export default selector;
