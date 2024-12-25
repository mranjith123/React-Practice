import React from "react";
import Home2 from './Home2';
class Home1 extends React.Component 
{
    state ={
        name:"telugu skill hub",
    }
    render(){
   return(

    //state
    
    //     <div>
    //         <Home2 />
    //    <h1>this is class components:{this.state.name}</h1> // this is referring current object
    //    <h2>this is class components</h2>
    //     </div>


    //Props
    <div>
        <Home2 name={this.state.name}/>
    </div>
    )
}
}
export default Home1;
