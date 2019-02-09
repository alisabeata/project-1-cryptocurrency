import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import {updBalanceBtc, updBalanceEur, updBalanceUsd} from './../actions';

export const initialState = {
  balanceBTC: 0,
  balanceEUR: 0,
  balanceUSD: 0,
};

// const balance = handleActions(
//   {
//     [updBalanceBtc.toString()]: (state, action) => {
//       console.log(state)
//       return ({
//         ...state,
//         balanceBTC: action.payload,
//       });
//     },
//     [updBalanceEur.toString()]: (state, action) => ({
//       ...state,
//       balanceEUR: action.payload,
//     }),
//     [updBalanceUsd.toString()]: (state, action) => ({
//       ...state,
//       balanceUSD: action.payload,
//     }),
//   },
//   initialState
// );

// //console.log('====')

// export const rootReducer = combineReducers({
//   balance,
// });
//console.log(rootReducer)

// import {
//   UPD_BALANCE_BTC,
//   UPD_BALANCE_EUR,
//   UPD_BALANCE_USD,
// } from './../actionTypes';

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
