import { Routes, Route } from 'react-router-dom';
import CashTopUpListing from './CashTopUpListing';
import CashTopUpDetails from './CashTopUpDetails';

function Router(props) {
  return (
    <Routes>
      <Route path="/" element={<CashTopUpListing {...props} />} />
      <Route
        path="cash-top-up-details"
        element={<CashTopUpDetails {...props} />}
      />
    </Routes>
  );
}
export default Router;
