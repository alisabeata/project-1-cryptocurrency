import {createStore, compose} from 'redux';
import {rootReducer} from './reducers';

const initialState = {
  balanceBTC: 0,
  balanceEUR: 0,
  balanceUSD: 0,
};

export default (state = initialState) =>
  createStore(
    rootReducer,
    state,
    compose(
      window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  );
