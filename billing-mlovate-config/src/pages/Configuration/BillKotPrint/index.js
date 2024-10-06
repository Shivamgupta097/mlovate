import { Routes, Route } from 'react-router-dom';
import BillKotPrint from './BillKotPrint';
import PrintListing from './PrintListing';
import PreferredConfig from './PreferredConfig';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<BillKotPrint />} />
      <Route path="print-listing" element={<PrintListing />} />
      <Route path="preferred-config" element={<PreferredConfig />} />
    </Routes>
  );
}

export default Router;
