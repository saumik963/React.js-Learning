import React, { Component } from 'react'

export default class State extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    increaseCount=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    decreaseCount=()=>{
        this.setState({
            count:this.state.count-1
        })
    }
  render() {
    const {count} = this.state
    return (
      <div>
        <h1>Count : {count}</h1>
        <button onClick={this.increaseCount}>+</button>
        <button onClick={this.decreaseCount} disabled={count===0 ? true: false}>-</button>
      </div>
    )
  }
}
