import React, { Component } from "react";

class MainGrid extends Component {
  render() {
    const styles = {
      marginTop: 50
    };
    return (
      <div className="container" style={styles}>
        <div className="row">
          <div className="col-md-12">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default MainGrid;
