import React, { Component, createRef } from 'react'

export default class UserForm extends Component {

    constructor(props){
        super(props)
        this.userNameRef = createRef();

        this.state={

        }
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        console.log(this.userNameRef.current.value)
        this.userNameRef.current.style.color = "green"
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit} action="">
        <div className="form-field">
        <label htmlFor="userName">UserName : </label>
        <input type="text" id='userName' ref={this.userNameRef} />
        </div>
        <div className="form-field">
        <label htmlFor="password">password : </label>
        <input type="password" id='password' />
        </div>
        <button type='submit'>Register</button>
      </form>
    )
  }
}
