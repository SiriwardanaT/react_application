import React, { Component } from 'react';
import './first.css'
class CheckTextreact extends Component {
  
     
    state = { 
        a : " Welcome to the channel"
     }

     submit =()=>{
         this.setState(prevState=>({
                 a: prevState.state.a

         }))
     }
  

    render() { 
     
        return (

             <div className="center">
                <h1>{this.state.a}</h1>
                <input type="button" onClick={this.submit} value="subscribe"/>

             </div>
          );
    }
}
 
export default CheckTextreact;