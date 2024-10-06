import { Routes, Route } from 'react-router-dom';
import WithdrawalDetails from './WithdrawalDetails';
import WithdrawalListing from './WithdrawalListing';

function Router(props) {
  return (
    <Routes>
      <Route path="/" element={<WithdrawalListing {...props} />} />
      <Route
        path="withdrawal-details"
        element={<WithdrawalDetails {...props} />}
      />
    </Routes>
  );
}
export default Router;
