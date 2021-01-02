import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './login.css'
import Forms from './form'

class Form_react extends Component {
    state = { 
        userName : '',
        error : ''

     }
    
    submitHandler =(event)=>{
           alert("clicked")  
    }
    render() { 
        return ( 
          <div>
              <Forms  value ={this.submitHandler}/>
          </div>
                
           

         );
    }
}
 
export default Form_react;