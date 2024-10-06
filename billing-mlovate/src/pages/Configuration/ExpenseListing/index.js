import { Routes, Route } from 'react-router-dom';
import ExpenseDetails from './ExpenseDetails';
import ExpenseListing from './ExpenseListing';

function Router(props) {
  return (
    <Routes>
      <Route path="/" element={<ExpenseListing {...props} />} />
      <Route path="expense-details" element={<ExpenseDetails {...props} />} />
    </Routes>
  );
}
export default Router;
