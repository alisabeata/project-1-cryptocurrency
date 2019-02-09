import {
  UPD_BALANCE_BTC,
  UPD_BALANCE_EUR,
  UPD_BALANCE_USD,
} from './../actionTypes';

export const rootReducer = (state, action) => {
  switch (action.type) {
    case UPD_BALANCE_BTC:
      return {...state, balanceBTC: action.payload};

    case UPD_BALANCE_EUR:
      return {...state, balanceEUR: action.payload};

    case UPD_BALANCE_USD:
      return {...state, balanceUSD: action.payload};

    default:
      return state;
  }
};
