import React,{Component} from "react";
import { FaAtom,FaBattleNet } from "react-icons/fa";
import State from "../State";
class Card extends Component{
    render(){
        return(
            <>
            <h2>Hello {this.props.name}</h2>
            <button><FaAtom className="icon" /></button>
            <button><FaBattleNet className="icon" /></button>
            </>
        )
    }
}


const Welcome=()=>{
    return React.createElement("h1",{},"This is a under the Hood component")
}



const Todo=()=>{
    return React.createElement("div",{},
        React.createElement("h1",{},"Todo Title"),
        React.createElement("p",{},"Todo Description"),
    )
}


function Counter() {
  return (
    <div>
        <State />
    </div>
  )
}


const Components = { Card, Welcome,Todo,Counter };

export default Components;