import React, { Component } from 'react'

class EventHandeler extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         changeText:""
      }
    }

    handleOnChange=(e)=>{
        this.setState(
            {changeText : e.target.value}
            ,()=>{      //secound parameeter
                console.log(this.state.changeText)
            }
        )
    }

    render() {
    return (
      <div>
        <input type='text' onChange={this.handleOnChange}  />
        <button onClick={this.handleClick}>Click Here</button>
        <h2>{this.state.changeText}</h2>
      </div>
    )
  }
}


export default EventHandeler;