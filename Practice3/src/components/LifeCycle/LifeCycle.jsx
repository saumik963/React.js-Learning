import React, { Component } from "react";


// Mounting -> constructor -> render -> componentDidMount
// Updating -> state/Props -> render -> 
// Unmounting ->

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      count: 0,
    };
  }

  handleIncrement=()=> {
    this.setState({
      count: this.state.count + 1,
    });
  }

  componentDidMount() {
    console.log("ComponentDidMount");
  }

  componentDidUpdate(){
    console.log("ComponentDidUpdate")
  }

  shouldComponentUpdate(){
    console.log("shouldComponentUpdate")
    return true
  }
  render() {
    {
      console.log("render");
    }
    return (
      <div>
        <h2>Counter : {this.state.count}</h2>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}
