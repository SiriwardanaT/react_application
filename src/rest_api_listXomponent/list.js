import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
class Getlist extends Component {
    state = { 
            post :[]

     }
     componentDidMount(){
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response =>{
                console.log(response)
                this.setState({
                    post : response.data
                })
            })
            .catch(error =>{
                console.log(error)
            })

     }
    render() { 
        
           
        return ( 
            <div>  
                 <table class="table">
                    <thead>
                        <tr>
   
                             <th scope="col">Name</th>
                             <th scope="col">Age</th>
                             <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.post.map(pos =>
                        <tr key={pos.id}>
                            <td>{pos.id}</td>
                            <td>{pos.name}</td>
                            <td><button>Delete</button></td>
                        </tr>)
        }
                    </tbody>
                </table>
            </div>     
         );
    }
}

export default Getlist 
