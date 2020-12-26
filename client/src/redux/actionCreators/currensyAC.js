import axios from 'axios';
import { GET_CURRENCY } from '../actionTypes/types';

export const fetchExchangeAC = () => {
    return (dispatch) => {
      axios.get('https://api.exchangeratesapi.io/latest?base=USD')
        .then(res => dispatch(addFetchExchangeAC(res.data)));
    };
  }
;

export const addFetchExchangeAC = (payload) => ({
  type: GET_CURRENCY,
  payload,
});