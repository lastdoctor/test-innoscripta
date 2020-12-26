import { ADD_PIZZA_ORDER, CHANGE_CURRENCY } from '../actionTypes/types';

export function cardReducer(state = {}, action) {
  switch (action.type) {
    case ADD_PIZZA_ORDER :
      return { ...state, pizzas: action.payload };

    default: {
      return state;
    }
  }
}

export function selectedCurrency(state ='', action) {
  switch (action.type){
    case CHANGE_CURRENCY:
      return { ...state, selectedCurrency: action.payload };
    default: {
      return state
    }
  }
}