import { Routes, Route, useLocation } from 'react-router-dom';
import Billing from 'pages/Billing';
import Login from 'pages/Login';
import Order from 'pages/Orders/Orders';
import Configuration from 'pages/Configuration';
import CommingSoon from 'components/common/ComingSoon';

function Router(props) {
  const location = useLocation();
  return (
    <Routes location={location}>
      <Route exact path="/" element={<Billing {...props} />} />
      <Route path="/login" element={<Login {...props} />} />
      <Route path="/billing" element={<Order {...props} />} />
      <Route path="/configuration/*" element={<Configuration {...props} />} />
      <Route path="/*" element={<CommingSoon {...props} />} />
    </Routes>
  );
}

export default Router;
