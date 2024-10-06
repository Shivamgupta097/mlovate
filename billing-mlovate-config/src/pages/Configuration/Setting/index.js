import { Routes, Route } from 'react-router-dom';
import Setting from './Setting';
import RestaurantConfiguration from './RestaurantConfiguration';
import ResetSyncCode from './ResetSyncCode';
import ResetBillNo from './ResetBillNo';
import RemoveAllOrder from './RemoveAllOrder';
import RemoveBackupFiles from './RemoveBackupFiles';
import DatabaseMigration from './DatabaseMigration';
import Logs from './Logs';

function Router(props) {
  return (
    <Routes>
      <Route path="/" element={<Setting {...props} />} />

      <Route
        path="restaurant-configuration"
        element={<RestaurantConfiguration {...props} />}
      />

      <Route path="reset-bill-no" element={<ResetBillNo {...props} />} />

      <Route
        path="restaurant-sync-code"
        element={<ResetSyncCode {...props} />}
      />

      <Route
        path="database-migration"
        element={<DatabaseMigration {...props} />}
      />

      <Route path="remove-all-order" element={<RemoveAllOrder {...props} />} />
      <Route
        path="remove-backup-files"
        element={<RemoveBackupFiles {...props} />}
      />

      <Route path="logs" element={<Logs {...props} />} />
    </Routes>
  );
}

export default Router;
