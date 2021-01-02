import React, { Component } from 'react';

class InrementCount extends Component{
        constructor(){
            super();
            this.state = {
                counter : "hello"
            }
            this.Counter = this.Counter.bind(this)
        }

        Counter(){
             
             this.setState ({
                 counter : "good bye"

             })
           console.log(this)

             
        }

        render(){
            return(
                    <div>
                        <p>{this.state.counter}</p>
                        
                        <button onClick={this.Counter}>Increment</button>



                    </div>

            )
          

        }





}
export default InrementCount

