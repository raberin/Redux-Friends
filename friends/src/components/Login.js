import React from "react";
import { connect } from "react-redux";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  changeHandler = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        //Since I added a value tag on inputs, I can use it to track the value
        //A name tag and a value tag is use to create the key:value pair
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="username"
            placeholder="username"
            value="this.state.credentials.username"
            onChange={this.changeHandler}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value="this.state.credentials.password"
            onChange={this.changeHandler}
          />
          <button>Log In</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogginIn: state.isLogginIn
  };
};

export default connect(
  mapStateToProps,
  {}
)(Login);
