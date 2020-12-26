import { GET_ALL_PIZZAS } from '../actionTypes/types';

export function pizzaReducer(state = {}, action) {
  switch (action.type) {
    case GET_ALL_PIZZAS:
      const pizza = action.payload.pizzas;
      const success = action.payload.success;
      return { ...state, pizza, success };
    default: {
      return state;
    }
  }
}