import { Routes, Route } from 'react-router-dom';
import CommingSoon from 'components/common/ComingSoon';
// Configuration pages components
import Configuration from 'pages/Configuration/Configuration';
import KotListing from 'pages/Configuration/KotListing';
import OrdersInfo from 'pages/Configuration/OrdersInfo';
import BillKotPrint from 'pages/Configuration/BillKotPrint';
import Tax from 'pages/Configuration/Tax';
import DiscountListing from 'pages/Configuration/DiscountListing/DiscountListing';
import BillingScreen from 'pages/Configuration/BillingScreen';
import Setting from 'pages/Configuration/Setting';
import BillingUserProfile from 'pages/Configuration/BillerUserProfile/BillerUserProfile';
import Menu from 'pages/Configuration/Menu';
import ExpenseListing from './ExpenseListing';
import CashTopUpListing from './CashTopUpListing';
import WithdrawalListing from './WithdrawalListing';
import CustomerListing from './CustomerListing';

function Router(props) {
  return (
    <Routes>
      <Route path="/" element={<Configuration {...props} />} />

      <Route path="order" element={<OrdersInfo {...props} />} />

      <Route path="tax" element={<Tax {...props} />} />

      <Route path="discount" element={<DiscountListing {...props} />} />

      <Route path="kot-listing" element={<KotListing {...props} />} />

      <Route path="customer-listing" element={<CustomerListing {...props} />} />
      <Route path="expense-listing/*" element={<ExpenseListing {...props} />} />
      <Route
        path="cash-top-up-listing/*"
        element={<CashTopUpListing {...props} />}
      />
      <Route
        path="withdrawal-listing/*"
        element={<WithdrawalListing {...props} />}
      />

      <Route
        path="billing-user-profile"
        element={<BillingUserProfile {...props} />}
      />

      <Route path="billing-screen/*" element={<BillingScreen {...props} />} />

      <Route path="setting/*" element={<Setting {...props} />} />

      <Route path="menu/*" element={<Menu {...props} />} />

      <Route path="bill-kot-print/*" element={<BillKotPrint {...props} />} />

      <Route path="/*" element={<CommingSoon {...props} />} />
    </Routes>
  );
}

export default Router;
