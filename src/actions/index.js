import {createActions} from 'redux-actions';

export const {updBalanceBtc, updBalanceEur, updBalanceUsd} = createActions(
  'UPD_BALANCE_BTC',
  'UPD_BALANCE_EUR',
  'UPD_BALANCE_USD'
);
