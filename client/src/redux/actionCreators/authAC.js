import axios from '@axios';
import { ADD_TOKENS } from '../actionTypes/types';

export const fetchSignUpAC = (body) => {
    return (dispatch) => {
      axios.post('/auth/signup', body)
        .then(res => dispatch(addTokensAC(res.data)));
    };
  }
;

export const fetchSignInAc = (body) => {
    return (dispatch) => {
      axios.post('/auth/signin', body)
        .then(res => dispatch(addTokensAC(res.data)));
    };
  }
;

export const addTokensAC = (payload) => ({
  type: ADD_TOKENS,
  payload,
});