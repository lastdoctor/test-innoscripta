import { ADD_PIZZA_ORDER } from '../actionTypes/types';

export function cardReducer(state = {}, action) {
  switch (action.type) {
    case ADD_PIZZA_ORDER :
      return { ...state, pizzas: action.payload };
    default: {
      return state;
    }
  }
}