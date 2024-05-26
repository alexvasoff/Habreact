import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from '../../selectors/getCounter/getCounter';

export const getCounterValue = createSelector(
  getCounter,
  (counter) => counter.value,
);
