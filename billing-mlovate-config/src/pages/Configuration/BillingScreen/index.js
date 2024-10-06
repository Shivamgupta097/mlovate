import { Routes, Route } from 'react-router-dom';
import BillingScreen from './BillingScreen';
import DeliveryDistanceListing from './DeliveryDistance';
import BillingScreenConfig from './BillingScreenConfig';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<BillingScreen />} />

      <Route
        path="delivery-distance-listing"
        element={<DeliveryDistanceListing />}
      />

      <Route path="billing-screen-config" element={<BillingScreenConfig />} />
    </Routes>
  );
}

export default Router;
