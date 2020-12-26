import { GET_CURRENCY } from '../actionTypes/types';

export function currencyReducer(state = {}, action) {
  switch (action.type) {
    case GET_CURRENCY:
      const euro = action.payload.rates.EUR;
      return { ...state, euro };
    default: {
      return state;
    }
  }
}