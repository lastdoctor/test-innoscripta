import { combineReducers } from 'redux';
import { pizzaReducer } from './pizzaReducer';
import { authReducer } from './authReducer';
import { cardReducer, selectedCurrency } from './cardReducer';
import { currencyReducer } from './currencyReducer';

export const rootReducer = combineReducers({
  products: pizzaReducer,
  tokens: authReducer,
  card: cardReducer,
  selected: selectedCurrency,
  currency: currencyReducer,
});