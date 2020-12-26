import { combineReducers } from 'redux';
import { pizzaReducer } from './pizzaReducer';
import { authReducer } from './authReducer';
import { cardReducer } from './cardReducer';
import { currencyReducer } from './currencyReducer';

export const rootReducer = combineReducers({
  products: pizzaReducer,
  tokens: authReducer,
  card: cardReducer,
  currency: currencyReducer,
});