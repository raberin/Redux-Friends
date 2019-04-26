import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

import "./App.css";

class App extends Component {
  render() {
    //Normally Router is wrapped around App in index.js,
    //But due to Provider being wrapped in it, we wrap Router here.
    return (
      <Router>
        <div className="App">
          <nav className="navbar">
            <Link className="navbar-link" to="/login">
              Login
            </Link>
            <Link className="navbar-link" to="/protected">
              Friends List
            </Link>
          </nav>
          <Route path="/login" component={Login} />
          {/* <PrivateRoute exact path="/protected" component={FriendsList} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
