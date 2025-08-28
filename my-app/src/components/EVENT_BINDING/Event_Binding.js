import React, { Component } from 'react'

class EventBinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
      // We can also bind inside constructor
      this.decreaseCount = this.decreaseCount.bind(this)

    }


    // using normal function occurs undefine error
    increaseCount(){
      this.setState({
          count:this.state.count+1
      })
    }

    decreaseCount(){
      this.setState({
          count:this.state.count-1
      })
    }
  render() {
    return (
      <div>
        <h2>Count : {this.state.count}</h2>
        {/* use bind(this) to solve the error */}
        <button onClick={this.increaseCount.bind(this)}>+</button>
        <button onClick={this.decreaseCount}>-</button>
      </div>
    )
  }
}

export default EventBinding;