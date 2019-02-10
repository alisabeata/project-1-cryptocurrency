import {updBalanceBtc, updBalanceEur, updBalanceUsd} from './../actions';

export const initialState = {
  balanceBTC: 0,
  balanceEUR: 0,
  balanceUSD: 0,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case updBalanceBtc.toString():
      return {...state, balanceBTC: action.payload};

    case updBalanceEur.toString():
      return {...state, balanceEUR: action.payload};

    case updBalanceUsd.toString():
      return {...state, balanceUSD: action.payload};

    default:
      return state;
  }
};
