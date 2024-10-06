import { Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import AreaManagement from './AreaManagement';
import SpecialNotesManagement from './SpecialNotesManagement';
import ItemManagement from './ItemManagement';

function Router(props) {
  return (
    <Routes>
      <Route path="/" element={<Menu {...props} />} />
      <Route path="item-management" element={<ItemManagement {...props} />} />
      <Route path="area-management" element={<AreaManagement {...props} />} />
      <Route
        path="special-notes-management"
        element={<SpecialNotesManagement {...props} />}
      />
    </Routes>
  );
}

export default Router;
