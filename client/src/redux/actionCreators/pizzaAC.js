import axios from '@axios';
import { GET_ALL_PIZZAS, ADD_PIZZA_ORDER, CHANGE_CURRENCY } from '../actionTypes/types';

export const fetchPizzaAC = () => {
  return (dispatch) => {
    axios.get('/pizzas')
      .then(res => dispatch(addFetchPizzaAC(res.data)));
  };
};

export const addFetchPizzaAC = (payload) => ({
  type: GET_ALL_PIZZAS,
  payload,
});


export const addPizzaOrder = (payload) => ({
  type: ADD_PIZZA_ORDER,
  payload,
});

export const ChangeCurrency = (payload) => ({
  type: CHANGE_CURRENCY,
  payload,
});