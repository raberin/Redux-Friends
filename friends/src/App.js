import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./components/Login";

import "./App.css";

class App extends Component {
  render() {
    //Normally Router is wrapped around App in index.js,
    //But due to Provider being wrapped in it, we wrap Router here.
    return (
      <Router>
        <div className="App">
          <nav>
            <Link to="/login">Login</Link>
          </nav>
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
