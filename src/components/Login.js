import React, { Component } from "react";
import fire from "../config/Fire";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: null
    };
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  inputKeyPress = event => {
    if (event.key === "Enter") {
      this.login(event);
    }
  };

  passwordChange = event => {
    this.setState({
      password: event.target.value
    });
  };

  login = event => {
    event.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {})
      .catch(error => {
        this.setState({ error });
      });
  };

  signup = event => {
    event.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {})
      .catch(error => {
        this.setState({ error });
      });
  };

  render() {
    return (
      <div>
        <div>
          <TextField
            id="outlined-email-input"
            value={this.state.email}
            onChange={this.onChange}
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
            style={{ width: 280 }}
          />
        </div>
        <div>
          <TextField
            id="outlined-password-input"
            value={this.state.password}
            onChange={this.passwordChange}
            onKeyPress={this.inputKeyPress}
            label="Password"
            type="password"
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
            style={{ width: 280 }}
          />
        </div>
        <div>
          <Button
            size="medium"
            onClick={this.login}
            style={{ margin: 10 }}
            variant="contained"
            color="primary"
          >
            Log In
          </Button>
          <Button
            size="medium"
            onClick={this.signup}
            style={{ margin: 10 }}
            variant="contained"
            color="primary"
          >
            Sign Up
          </Button>
        </div>

        {this.state.error && <p>{this.state.error.message}</p>}
      </div>
    );
  }
}

export default Login;
