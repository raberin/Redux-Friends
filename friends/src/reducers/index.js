import {
  LOGIN_START,
  LOGIN_RESOLVED,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from "../actions";

const initialState = {
  isLoggingIn: false,
  friends: [],
  error: "",
  fetchingData: false
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
    case FETCH_DATA_START: {
      return {
        ...state,
        error: "",
        fetchingData: true
      };
    }
    case FETCH_DATA_SUCCESS: {
      //Log what is actually being fetched
      console.log(action.payload);
      return {
        ...state,
        error: "",
        fetchingData: false,
        friends: action.payload
      };
    }
    case FETCH_DATA_FAILURE: {
      console.log(action.payload);
      return {
        ...state,
        error: action.payload,
        fetchingData: false
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
