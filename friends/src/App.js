import React, { Component } from "react";
import Login from "./components/Login";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/login">Login</Link>
        </nav>
        <Route path="/login" component={Login} />
      </div>
    );
  }
}

export default App;
