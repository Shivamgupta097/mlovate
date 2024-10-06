import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CategorySummary from './CategorySummary';
import CoverSizeSummary from './CoverSizeSummary';
import EmployeeSummary from './EmployeeSummary';
import GroupSummary from './GroupSummary';
import ItemSummary from './ItemSummary';
import OrderSummary from './OrderSummary';
import ExecutiveSalesSummary from './ExecutiveSalesSummary';
import Reports from './Reports';
import SalesSummary from './SalesSummary';
import VariationSummary from './VariationSummary';
import TipSummary from './TipSummary';
import CounterSummary from './CounterSummary';
import LocalityWiseSummary from './LocalityWiseSummary';
import CaptainWiseSummary from './CaptainWiseSummary';
import NCItemSummary from './NCItemSummary';

function Router(props) {
  return (
    <Routes>
      <Route path="/" element={<Reports />} />
      <Route path="category" element={<CategorySummary />} />

      <Route path="item" element={<ItemSummary />} />
      <Route path="sales" element={<SalesSummary />} />
      <Route path="order" element={<OrderSummary />} />
      <Route path="executive-sales" element={<ExecutiveSalesSummary />} />
      <Route path="employee" element={<EmployeeSummary />} />
      <Route path="group" element={<GroupSummary />} />
      <Route path="variation" element={<VariationSummary />} />
      <Route path="cover-size" element={<CoverSizeSummary />} />
      <Route path="tip" element={<TipSummary />} />
      <Route path="counter" element={<CounterSummary />} />
      <Route path="locality-wise" element={<LocalityWiseSummary />} />
      <Route path="captain-wise" element={<CaptainWiseSummary />} />
      <Route path="nc-item" element={<NCItemSummary />} />
    </Routes>
  );
}

export default Router;
