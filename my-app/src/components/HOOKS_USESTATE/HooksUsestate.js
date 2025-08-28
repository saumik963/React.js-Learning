import React, { Component } from "react";

export default class HooksUseState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  
  increaseCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <h2>Count : {this.state.count}</h2>
        <button onClick={this.increaseCount.bind(this)}>Increase</button>
      </div>
    );
  }
}
