import React, { Component } from "react";
import fire from "../config/Fire";
import Navbar from "./Navbar";
import Login from "./Login";
import Home from "./Home";
import "../App.css";
import MainGrid from "./MainGrid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar title="React with Google Firebase" />
        <MainGrid>{this.state.user ? (<Home />) : (<Login />)}</MainGrid>
      </div>
    );
  }
}

export default App;
