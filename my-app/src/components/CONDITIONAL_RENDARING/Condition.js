import React, { Component } from 'react'
import LoginPage from './LoginPage'
import HomePage from './HomePage'

// Conditional_Rendaring with if else
// class ConditionalRendaring extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//         isLoggedIn: true
//     }
//   }
//     render() {
//         if(this.state.isLoggedIn){
//             return <HomePage />
//         }
//         else{
//             return <LoginPage />
//         }
//   }
// }


// Conditional_Rendaring using Ternary Operator
// class ConditionalRendaring extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//         isLoggedIn: false
//     }
//   }
//     render() {
//         const {isLoggedIn}=this.state

        
//         return(
//             <div>
//                 {isLoggedIn ? <HomePage /> : <LoginPage />}
//             </div>
//         )
//   }
// }

// Conditional_Rendaring using ShortCircuit
class ConditionalRendaring extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        isLoggedIn: false
    }
  }
    render() {
        const {isLoggedIn}=this.state

        
        return(
            <div>
                {isLoggedIn && <HomePage />}
            </div>
        )
  }
}



export default ConditionalRendaring;