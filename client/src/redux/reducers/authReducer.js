import { ADD_TOKENS} from '../actionTypes/types';

export function authReducer(state = {}, action) {
  switch (action.type) {
    case ADD_TOKENS:
      const accessToken = action.payload.tokens.accessToken;
      const refreshToken = action.payload.tokens.refreshToken;
      const success = action.payload.success;
      return {
        ...state,
        accessToken,
        refreshToken,
        success,
      };
    default: {
      return state;
    }
  }
}