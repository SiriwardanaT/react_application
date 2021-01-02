import React, { Component } from 'react';
import axios from 'axios'
class Arraycount extends Component {
    state = {
        id :103,
        userId : 3,  
        title : 'ksmsl',
        body :'ddsd'
    }
  componentDidMount(){

             axios.post('https://jsonplaceholder.typicode.com/posts' ,this.state)
             .then(res =>
                console.log(res))
             .catch(error =>
                console.log(error))
  }
    render() { 
      
        return ( 
            <div>Success</div>
               
        );
    }
}
 
export default Arraycount;