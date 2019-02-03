import {
  UPD_BALANCE_BTC,
  UPD_BALANCE_EUR,
  UPD_BALANCE_USD,
} from './../actionTypes';

export const updBalanceBTC = amount => ({
  type: UPD_BALANCE_BTC,
  payload: amount,
});

export const updBalanceEUR = amount => ({
  type: UPD_BALANCE_EUR,
  payload: amount,
});

export const updBalanceUSD = amount => ({
  type: UPD_BALANCE_USD,
  payload: amount,
});