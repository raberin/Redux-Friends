import { LOGIN_START, LOGIN_RESOLVED } from "../actions";

const initialState = {
  isLoggingIn: false,
  friends: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...state,
        isLoggingIn: true
      };
    }
    case LOGIN_RESOLVED: {
      return {
        ...state,
        isLoggingIn: false
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
