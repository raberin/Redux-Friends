import axios from "axios";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_RESOLVED = "LOGIN_RESOLVED";

//Creating the action creator for logging in
export const login = credentials => dispatch => {
  //Dispatch lets you perform async promises before reaching reducer
  dispatch({ type: LOGIN_START });

  return (
    axios
      .post("http://localhost:5000/api/login", credentials)
      //When login credentials submitted from form is correct proceed to .then
      .then(res => {
        //We will add a token to local storage and dispatch LOGIN_RESOLVED
        localStorage.setItem("token", res.data.payload);
        dispatch({ type: LOGIN_RESOLVED });
      })
      .catch(err => {
        console.log("login error: ", err);
        //Error 403 would be invalid login credentials
        //So the token in system is removed
        if (err.response.status === 403) {
          localStorage.removeItem("token");
        }
        dispatch({ type: LOGIN_RESOLVED });
      })
  );
};

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const fetchData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get("http://localhost:5000/api/friends", {
      header: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log(res);
      dispatch({
        type: FETCH_DATA_SUCCESS,
        payload: res.data.data
      });
    })
    .catch(err => {
      console.log(err.response);
      if (err.response.status === 403) {
        localStorage.removeItem("token");
      }
      dispatch({
        type: FETCH_DATA_SUCCESS,
        payload: err.response
      });
    });
};
