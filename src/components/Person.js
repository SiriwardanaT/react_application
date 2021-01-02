import React, { Component } from 'react';
class Persons  extends Component {

    
    render() { 
        return (
                <div>
                    <h1>{this.props.persons}</h1>
                </div>

         );
    }
}
 
export default Persons;