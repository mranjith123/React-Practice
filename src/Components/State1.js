import React, { Component } from "react";
import Prop from "./Prop";

class State1 extends Component {
    state = {
      name : "ranjith",
        id : "61047",
        age: 27,
        cmny: "persistent"
        
    }
    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.state.id}</h1>
                <h1>{this.state.age}</h1>
                <h1>{this.state.cmny}</h1>
                <Prop name={this.state.name}/>
            </div>
        )
    }
}
export default State1;